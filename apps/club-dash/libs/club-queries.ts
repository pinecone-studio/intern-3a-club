import {
  GetAllApprovedClubsDocument,
  GetAllPendingClubsDocument,
} from '../app/_hooks/generated/graphql';

// Shared GraphQL queries for clubs used across admin views

export const GET_ALL_APPROVED_CLUBS = GetAllApprovedClubsDocument;

export const GET_ALL_PENDING_CLUBS = GetAllPendingClubsDocument;
