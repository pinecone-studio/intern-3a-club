'use client';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import {
  ApprovedClubsData,
  Club,
  PendingClubsData,
} from '../../../../libs/types';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_PENDING_CLUBS,
} from '../../../../libs/club-queries';
import { mapGetAllClubsToClubs } from '../../../../libs/club-mappers';

export const removeClub = (arr: Club[], id: string) =>
  arr.filter((c) => c.id !== id);

export function useAdminClubsData() {
  const [pending, setPending] = useState<Club[]>([]);
  const [approved, setApproved] = useState<Club[]>([]);

  const {
    data: approvedData,
    loading: loadingApproved,
    error: errorApproved,
  } = useQuery<ApprovedClubsData>(GET_ALL_APPROVED_CLUBS);

  const {
    data: pendingData,
    loading: loadingPending,
    error: errorPending,
  } = useQuery<PendingClubsData>(GET_ALL_PENDING_CLUBS);

  useEffect(() => {
    if (approvedData?.getAllApprovedClubs) {
      setApproved(mapGetAllClubsToClubs(approvedData.getAllApprovedClubs));
    }
  }, [approvedData]);

  useEffect(() => {
    if (pendingData?.getAllPendingClubs) {
      setPending(mapGetAllClubsToClubs(pendingData.getAllPendingClubs));
    }
  }, [pendingData]);

  return {
    approved,
    setApproved,
    pending,
    setPending,
    loadingApproved,
    loadingPending,
    errorApproved,
    errorPending,
  };
}

export type AdminClubsData = ReturnType<typeof useAdminClubsData>;

export function getIsLoading(d: AdminClubsData) {
  return d.loadingApproved || d.loadingPending;
}

export function getIsError(d: AdminClubsData) {
  return Boolean(d.errorApproved || d.errorPending);
}

function getApprovedMessage(d: AdminClubsData) {
  return d.errorApproved?.message ?? '';
}

function getPendingMessage(d: AdminClubsData) {
  return d.errorPending?.message ?? '';
}

export function getErrorMessage(d: AdminClubsData) {
  return getApprovedMessage(d) || getPendingMessage(d) || '';
}
