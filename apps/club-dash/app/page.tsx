'use client';

import { useEffect, useState, useCallback } from 'react';
import { DashboardHeader } from './_components/main/Header';
import { DashboardSidebar } from './_components/main/sidebar/DashSidebar';
import { ViewRender } from './_components/main/ViewRender';
import { useAuth } from '@clerk/nextjs';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client/react';

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
        authUserId
        azureEmail
        firstName
        lastName
      }
      ... on Student {
        id
        authUserId
        azureEmail
        firstName
        lastName
        classId
      }
    }
  }
`;

export default function Dashboard() {
  const [activeView, setActiveView] = useState<string>('Join Club');
  const { isLoaded, userId } = useAuth();

  const [syncUser, { loading, error }] =
    useMutation<SyncUserResponse>(SYNC_USER_MUTATION);

  const performSync = useCallback(
    async (signal: AbortSignal) => {
      try {
        const { data } = await syncUser({
          context: {
            fetchOptions: { signal },
          },
        });

        if (data?.syncUser) {
          console.log('Backend-тэй амжилттай синхрончилллоо:', data.syncUser);
        }
      } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('aborted'))
          return;
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

  return (
    <div className="min-h-screen mx-auto bg-background">
      <DashboardSidebar
        currentActive={activeView}
        onViewChange={handleViewChange}
      />

      <div className="pl-64 flex flex-col min-h-screen">
        <DashboardHeader />

        <main className="flex-1 p-6">
          {loading && (
            <div className="flex items-center gap-2 mb-4 p-4 bg-blue-50 rounded-lg">
              <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              <span className="text-sm text-blue-600 font-medium">
                Системтэй холбогдож байна, түр хүлээнэ үү...
              </span>
            </div>
          )}

          {error && (
            <div className="text-sm text-red-500 bg-red-50 p-4 rounded-lg border border-red-100 mb-4 shadow-sm">
              <div className="font-bold flex items-center gap-2">
                <span>⚠️ Холболтын алдаа:</span>
              </div>
              <p className="mt-1">{error.message}</p>
              <p className="text-xs mt-2 text-red-400">
                Зөвлөгөө: Та нэвтрэх эрхээ шалгах эсвэл хөтөчөө дахин ачаална
                уу.
              </p>
            </div>
          )}

          {!loading && <ViewRender activeView={activeView} />}
        </main>
      </div>
    </div>
  );
}
