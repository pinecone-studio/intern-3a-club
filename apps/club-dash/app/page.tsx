'use client';

import { useEffect, useState, useCallback } from 'react';
import { DashboardHeader } from './_components/main/Header';
import { DashboardSidebar } from './_components/main/sidebar/DashSidebar';
import { ViewRender } from './_components/main/ViewRender';
import { useAuth } from '@clerk/nextjs';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';
// import { MyClubs } from './_components/main/MyClubs';

interface SyncUserResponse {
  syncUser: {
    __typename: 'Teacher' | 'Student';
    id: string;
    authUserId: string;
    azureEmail: string;
    firstName: string;
    lastName: string;
    classId?: string;
  };
}

const SYNC_USER_MUTATION = gql`
  mutation SyncUser {
    syncUser {
      __typename
      ... on Teacher {
        id
        azureEmail
        firstName
        lastName
      }
      ... on Student {
        id
        azureEmail
        firstName
        lastName
        classId
      }
    }
  }
`;

const isAbortError = (err: unknown): boolean => {
  const error = err as { name?: string; message?: string };
  return error.name === 'AbortError' || !!error.message?.includes('aborted');
};

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>('Join Club');
  const [isSynced, setIsSynced] = useState(false);
  const { isLoaded, userId, getToken } = useAuth();

  const [syncUser, { loading, error }] =
    useMutation<SyncUserResponse>(SYNC_USER_MUTATION);

  const performSync = useCallback(
    async (signal: AbortSignal) => {
      try {
        const token = await getToken();
        if (!token) {
          console.error('Синхрончлол алгасагдлаа: Clerk token олдсонгүй.');
          return;
        }

        const { data } = await syncUser({
          context: {
            fetchOptions: { signal },
            headers: {
              authorization: `Bearer ${token}`,
            },
          },
        });
        console.log({ data });
        if (data?.syncUser) {
          // Энд шууд log болон state-ээ шинэчилнэ
          console.log('Backend-тэй амжилттай синхрончлолоо:', data.syncUser);
          setIsSynced(true);
        }
      } catch (err: unknown) {
        if (isAbortError(err)) return;
        console.error('Синхрончлолын алдаа:', err);
      }
    },
    [getToken, syncUser]
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

        {/* {isSynced && <MyClubs />} */}
        <main className="flex-1 p-6">{statusContent[currentStatus]}</main>
      </div>
    </div>
  );
}
