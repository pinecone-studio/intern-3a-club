'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CreateClubCenter } from '../components/create-club/CreateClubCenter';
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

const Home = () => {
  const [isSynced, setIsSynced] = useState(false);
  const { isLoaded, userId, getToken } = useAuth();
  const [syncUser, { error }] =
    useMutation<SyncUserResponse>(SYNC_USER_MUTATION);

  // Логикийг хялбарчлахын тулд алдаа шалгах хэсгийг тусад нь функц болгов
  const handleSyncResult = useCallback(
    (data: SyncUserResponse | null | undefined) => {
      if (data?.syncUser) {
        console.log('Backend-тэй амжилттай синхрончлолоо:', data.syncUser);
        setIsSynced(true);
      }
    },
    []
  );

  const performSync = useCallback(
    async (signal: AbortSignal) => {
      try {
        const token = await getToken();
        if (!token) {
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
        handleSyncResult(data);
      } catch (err: unknown) {
        if (!isAbortError(err)) {
          console.error('Синхрончлолын алдаа:', err);
        }
      }
    },
    [getToken, syncUser, handleSyncResult]
  );

  useEffect(() => {
    if (!isLoaded || !userId) return;
    const controller = new AbortController();
    performSync(controller.signal);
    return () => controller.abort();
  }, [isLoaded, userId, performSync]);

  // Error View
  if (error && !isSynced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816]">
        <div className="bg-white p-8 rounded-2xl text-center shadow-2xl">
          <h2 className="text-xl font-bold text-red-600">Холболт амжилтгүй</h2>
          <p className="text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <CreateClubCenter />
    </div>
  );
};

export default Home;
