"use client";

import * as Hls from "hls.js";
import { Plus, Upload, X } from "lucide-react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  addTag,
  createTempTag,
  filterTags,
  sanitizeTagInput,
  tagExists,
} from "../../utils/tag-utils";
import uploadInChunks from "../../utils/upload-in-chunks";
import validateVideoResolution from "../../utils/validate-video-resolution";
import { cn } from "../utils";
import { Badge } from "./badge";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { Label } from "./label";


export const backendUrl =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://videos.pinebaatars.mn";

export interface VideoUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  onUploadComplete?: (videoId: string) => void;
  videoId?: string;
}

export type TagType = {
  id: string;
  name: string;
  createAt: number;
};

const VideoUpload = React.forwardRef<HTMLDivElement, VideoUploadProps>(
  ({ className, onUploadComplete, videoId, ...props }, ref) => {
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [video, setVideo] = useState(videoId);
    const [tags, setTags] = useState<TagType[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tagInputValue, setTagInputValue] = useState("");
    const [tagOpen, setTagOpen] = useState(false);

    const streamUrl = video
      ? `${backendUrl}/api/stream/${video}/master.m3u8`
      : "";

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const fetchTags = async () => {
        try {
          const response = await fetch("https://videos.pinebaatars.mn/api/tags");
          const res = (await response.json()).tags as TagType[];
          setTags(res);
        } catch (error) {
          console.error("Failed to fetch tags:", error);
        }
      };

      fetchTags();
    }, []);

    useEffect(() => {
      if (!streamUrl) return;
      const videoElement = videoRef.current;
      if (!videoElement) return;

      if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src = streamUrl;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoElement);
        return () => hls.destroy();
      }
    }, [streamUrl]);

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      if (!f) return;

      if (f.type !== "video/mp4") return setError("Only MP4 allowed");
      if (f.size > 1024 * 1024 * 1024) return setError("Max size is 1GB");

      try {
        const ok = await validateVideoResolution(f);
        if (!ok) return setError("Max resolution is 1080p");
      } catch {
        return setError("Video validation failed");
      }

      setError("");
      setMessage("");
      setFile(f);
    };

    const handleUpload = async () => {
      if (!file) return setError("Please select a file");

      setUploading(true);
      setError("");
      setMessage("");
      setProgress(0);

      try {
        const uploadedId = await uploadInChunks(file, selectedTags, setProgress);
        setVideo(uploadedId);
        setMessage("Upload complete!");
        setFile(null);
        onUploadComplete?.(uploadedId);
      } catch {
        setError("Upload failed");
      } finally {
        setUploading(false);
      }
    };

    const handleTagSelect = (tag: TagType) => () => {
      if (!selectedTags.includes(tag.name)) {
        setSelectedTags((prev) => [...prev, tag.name]);
      }
      setTagInputValue("");
    };

    const handleTagUnselect = (tag: TagType) => () => {
      setSelectedTags((prev) => prev.filter((t) => t !== tag.name));
    };

    const handleDropdown = () => {
      setTagOpen((prev) => !prev);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTagInputValue(e.target.value);
    };

    const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;

      const name = sanitizeTagInput(tagInputValue);
      if (!name) return;

      if (selectedTags.includes(name)) return;

      if (!tagExists(tags, name)) {
        const newTag = createTempTag(name);
        setTags((prev) => addTag(prev, newTag));
      }

      setSelectedTags((prev) => [...prev, name]);

      setTagInputValue("");
      setTagOpen(false);
    };


    const addNewTag = () => {
      const name = sanitizeTagInput(tagInputValue);
      if (!name) return;

      const newTag = createTempTag(name);

      setTags((prev) => addTag(prev, newTag));
      setSelectedTags((prev) => [...prev, name]);

      setTagInputValue("");
      setTagOpen(false);
    };


    return (
      <div ref={ref} {...props} className="h-full w-full">
        <div
          className={cn(
            "rounded-lg border-2 border-green-500 border-dashed p-4 space-y-4 min-w-[400px]",
            className
          )}
        >
          <div className="bg-green-200 rounded-full w-10 h-10 mx-auto flex items-center justify-center">
            <Upload className="text-green-800" />
          </div>

          <h3 className="text-lg font-semibold text-center">Upload Video</h3>

          <input
            type="file"
            accept="video/mp4"
            disabled={uploading}
            onKeyDown={handleTagKeyDown}
            onChange={handleFileSelect}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
          />

          {file && (
            <div className="text-sm ml-4 text-muted-foreground space-y-1">
              <p>
                <strong>Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          )}

          <div className="text-sm text-slate-600 p-2 rounded bg-blue-50 border border-blue-200">
            <ul className="list-disc ml-6 text-sm text-muted-foreground">
              <li>MP4 only</li>
              <li>Max 1GB</li>
              <li>Max resolution 1080p</li>
            </ul>
          </div>

          {uploading && (
            <div className="w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-blue-600 rounded transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {message && (
            <div className="text-sm p-2 rounded bg-green-50 border border-green-300 text-green-700">
              {message}
            </div>
          )}

          {error && (
            <div className="text-sm p-2 rounded bg-red-50 border border-red-300 text-red-700">
              {error}
            </div>
          )}
        </div>

        <div className="my-4">
          <Label className="text-sm font-normal ml-1">Tags</Label>

          <Command className="overflow-visible bg-transparent">
            <div className="px-3 py-2 text-sm border rounded-md group border-input focus-within:ring-2 bg-slate-50">
              <div className="flex flex-wrap max-w-xs gap-2">
                {selectedTags.map((tagName) => {
                  const tag = tags.find((t) => t.name === tagName);
                  if (!tag) return null;

                  return (
                    <Badge key={tagName} variant="secondary">
                      {tagName}
                      <button
                        className="ml-1 rounded-full"
                        onClick={handleTagUnselect(tag)}
                      >
                        <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                      </button>
                    </Badge>
                  );
                })}

                <input
                  value={tagInputValue}
                  onChange={handleInputChange}
                  onFocus={handleDropdown}
                  disabled={uploading}
                  placeholder="Select tag"
                  className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {tagOpen && !uploading && (
              <CommandList className="bg-slate-50 rounded-md my-2">
                <CommandGroup>
                  {filterTags(tags, selectedTags, tagInputValue)
                    .map((tag) => (
                      <CommandItem key={tag.id} onSelect={handleTagSelect(tag)}>
                        {tag.name}
                      </CommandItem>
                    ))}

                  {tagInputValue.trim() &&
                    !tagExists(tags, tagInputValue) && (
                      <CommandItem key="create-new" onSelect={addNewTag}>
                        <Plus width={16} className="text-green-500" />
                        <strong className="ml-1">{tagInputValue}</strong>
                      </CommandItem>
                    )}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>

        <button
          onClick={handleUpload}
          disabled={!file || uploading}
          className={cn(
            "w-full py-2 rounded-md text-white font-medium",
            uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {uploading ? "Uploading…" : "Upload"}
        </button>

        {video && (
          <video
            ref={videoRef}
            controls
            className="w-[420px] h-[240px] my-10"
          />
        )}
      </div>
    );
  }
);

VideoUpload.displayName = "VideoUpload";
export { VideoUpload };
