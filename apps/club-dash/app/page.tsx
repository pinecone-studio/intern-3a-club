'use client';
 
import { useEffect, useState, useCallback } from 'react';
import { DashboardHeader } from './_components/main/Header';
import { DashboardSidebar } from './_components/main/sidebar/DashSidebar';
import { ViewRender } from './_components/main/ViewRender';
import { useAuth } from '@clerk/nextjs';
import { useMutation } from '@apollo/client/react';
import {
  SyncUserDocument,
  SyncUserMutation,
} from './_hooks/generated/graphql';

const isAbortError = (err: unknown): boolean => {
  const error = err as { name?: string; message?: string };
  return error.name === 'AbortError' || !!error.message?.includes('aborted');
};

const handleSyncSuccess = (data: SyncUserMutation | undefined) => {
  if (data?.syncUser) {
    console.log('Backend-тэй амжилттай синхрончилллоо:', data.syncUser);
  }
};
 
export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>('Join Club');
  const { isLoaded, userId } = useAuth();
 
  const [syncUser, { loading, error }] = useMutation(SyncUserDocument);
 
  const performSync = useCallback(
    async (signal: AbortSignal) => {
      try {
        const { data } = await syncUser({
          context: {
            fetchOptions: { signal },
          },
        });
 
        handleSyncSuccess(data);
      } catch (err: unknown) {
        if (isAbortError(err)) return;
        console.error('Синхрончлолын алдаа:', err);
      }
    },
    [syncUser]
  );
 
  useEffect(() => {
    if (!isLoaded || !userId) return;
 
    const controller = new AbortController();
    performSync(controller.signal);
 
    return () => {
      controller.abort();
    };
  }, [isLoaded, userId, performSync]);
 
  const handleViewChange = (label: string) => {
    setActiveView(label);
  };
 
  const statusContent = {
    loading: (
      <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
        <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full" />
        <span className="text-sm text-blue-600 font-medium">
          Системтэй холбогдож байна...
        </span>
      </div>
    ),
    error: (
      <div className="text-sm text-red-500 bg-red-50 p-4 rounded-lg border border-red-100 shadow-sm">
        <p className="font-bold">⚠️ Холболтын алдаа: {error?.message}</p>
      </div>
    ),
    success: <ViewRender activeView={activeView} />,
  };
 
  const currentStatus = loading ? 'loading' : error ? 'error' : 'success';
 
  return (
    <div className="min-h-screen mx-auto bg-background">
      <DashboardSidebar
        currentActive={activeView}
        onViewChange={handleViewChange}
      />
 
      <div className="pl-64 flex flex-col min-h-screen">
        <DashboardHeader />
 
        <main className="flex-1 p-6">{statusContent[currentStatus]}</main>
      </div>
    </div>
  );
} 
 
