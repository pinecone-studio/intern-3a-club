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
  const { isLoaded, userId } = useAuth();

  const [syncUser, { loading, error }] =
    useMutation<SyncUserResponse>(SYNC_USER_MUTATION);

  const performSync = useCallback(
    async (signal: AbortSignal) => {
      try {
        const { data } = await syncUser({
          context: { fetchOptions: { signal } },
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

  if (error && !isSynced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816]">
        <div className="bg-white p-8 rounded-2xl text-center">
          <h2 className="text-xl font-bold text-red-600">Холболт амжилтгүй</h2>
          <p className="text-gray-500 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  // Амжилттай болсон үед
  return (
    <div className="min-h-screen bg-[url('/pinebaatar.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <CreateClubCenter />
    </div>
  );
};
export default Home;
