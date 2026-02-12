"use client";

import { Upload } from "lucide-react";
import * as React from "react";
import { useImperativeHandle, useState } from "react";
import extractVideoMetadata from "../../utils/extract-video-metadata";
import uploadInChunks from "../../utils/upload-in-chunks";
import validateVideoResolution from "../../utils/validate-video-resolution";
import { cn } from "../utils";

export const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://videos.pinebaatars.mn";

const CHUNK_SIZE = 5 * 1024 * 1024;

export type VideoMetadata = {
    duration: number;
    thumbnail: string;
};

export type VideoUploadHandle = {
    uploadVideo: () => Promise<string>;
    startUploadAndGetVideoId: () => Promise<{ videoId: string; completeUpload: () => Promise<void> }>;
    uploadAndWaitForQueue: () => Promise<string>;
    reset: () => void;
};

export interface VideoUploadProps {
    onFileSelect?: (_file: File, _metadata: VideoMetadata) => void;
    onUploadStart?: () => void;
    onUploadProgress?: (_progress: number) => void;
    onUploadComplete?: (_videoId: string) => void;
    onUploadError?: (_error: string) => void;
    disabled?: boolean;
    className?: string;
}

const startUploadAndGetVideoId = async (
    file: File,
    tags: string[],
    onProgress: (p: number) => void,
    onUploadComplete?: (videoId: string) => void
): Promise<{ videoId: string; completeUpload: () => Promise<void> }> => {
    const initRes = await fetch(`${backendUrl}/api/upload/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: file.name, contentType: file.type, tags }),
    });

    if (!initRes.ok) throw new Error(await initRes.text());

    const { videoId, uploadId } = await initRes.json();
    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

    const completeUpload = async () => {
        for (let i = 0; i < totalChunks; i++) {
            const chunk = file.slice(i * CHUNK_SIZE, Math.min((i + 1) * CHUNK_SIZE, file.size));

            const res = await fetch(`${backendUrl}/api/upload/chunk/${videoId}/${uploadId}/${i + 1}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/octet-stream' },
                body: chunk,
            });

            if (!res.ok) throw new Error(await res.text());
            onProgress(((i + 1) / totalChunks) * 100);
        }

        const completeRes = await fetch(`${backendUrl}/api/upload/complete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoId, uploadId }),
        });

        if (!completeRes.ok) throw new Error(await completeRes.text());
        onUploadComplete?.(videoId);
    };

    return { videoId, completeUpload };
};

export const VideoUploadSproutLab = React.forwardRef<VideoUploadHandle, VideoUploadProps>(
    ({ className, onFileSelect, onUploadStart, onUploadProgress, onUploadComplete, onUploadError, disabled }, ref) => {
        const [file, setFile] = useState<File | null>(null);
        const [progress, setProgress] = useState(0);
        const selectedTags = ["sprout-lab"];

        useImperativeHandle(ref, () => ({
            uploadVideo: async () => {
                if (!file) throw new Error("No file selected");

                onUploadStart?.();
                setProgress(0);

                const uploadedId = await uploadInChunks(file, selectedTags, (p) => {
                    setProgress(p);
                    onUploadProgress?.(p);
                });

                onUploadComplete?.(uploadedId);
                return uploadedId;
            },
            startUploadAndGetVideoId: async () => {
                if (!file) throw new Error("No file selected");

                onUploadStart?.();
                setProgress(0);

                return startUploadAndGetVideoId(file, selectedTags, (p) => {
                    setProgress(p);
                    onUploadProgress?.(p);
                }, onUploadComplete);
            },
            uploadAndWaitForQueue: async () => {
                if (!file) throw new Error("No file selected");

                onUploadStart?.();
                setProgress(0);

                const { videoId, completeUpload } = await startUploadAndGetVideoId(file, selectedTags, (p) => {
                    setProgress(p);
                    onUploadProgress?.(p);
                }, onUploadComplete);

                await completeUpload();

                return videoId;
            },
            reset: () => {
                setFile(null);
                setProgress(0);
            },
        }));

        const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const f = e.target.files?.[0];
            if (!f) return;

            if (!validateFileType(f)) return;
            if (!validateFileSize(f)) return;

            const isValid = await validateResolution(f);
            if (!isValid) return;

            await extractAndNotify(f);
        };

        const validateFileType = (f: File) => {
            if (f.type !== "video/mp4") {
                onUploadError?.("Only MP4 allowed");
                return false;
            }
            return true;
        };

        const validateFileSize = (f: File) => {
            if (f.size > 1024 * 1024 * 1024) {
                onUploadError?.("Max size is 1GB");
                return false;
            }
            return true;
        };

        const validateResolution = async (f: File) => {
            try {
                const ok = await validateVideoResolution(f);
                if (!ok) {
                    onUploadError?.("Max resolution is 1080p");
                    return false;
                }
                return true;
            } catch {
                onUploadError?.("Video validation failed");
                return false;
            }
        };

        const extractAndNotify = async (f: File) => {
            try {
                const metadata = await extractVideoMetadata(f);
                setFile(f);
                onFileSelect?.(f, metadata);
            } catch {
                onUploadError?.("Failed to extract video metadata");
            }
        };



        return (
            <div className={cn("space-y-4", className)}>
                <div className="flex items-center gap-2">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-medium">Project Video</h4>
                </div>

                <input
                    type="file"
                    accept="video/mp4"
                    disabled={disabled}
                    onChange={handleFileSelect}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                />

                {file && (
                    <p className="text-sm text-muted-foreground">
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                )}

                {progress > 0 && progress < 100 && (
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                )}

                <div className="text-xs text-muted-foreground bg-muted p-3 rounded-md">
                    <ul className="space-y-1">
                        <li>• MP4 format only</li>
                        <li>• Maximum file size: 1GB</li>
                        <li>• Maximum resolution: 1080p</li>
                    </ul>
                </div>
            </div>
        );
    }
);

VideoUploadSproutLab.displayName = "VideoUploadSproutLab";
export default VideoUploadSproutLab;
