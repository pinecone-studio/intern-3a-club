import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Club = {
  __typename?: 'Club';
  createdAt: Scalars['String']['output'];
  creatorId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  maxMember: Scalars['Int']['output'];
  minMember: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  preferredTeachers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: ClubStatus;
  teacherId?: Maybe<Scalars['String']['output']>;
  timetables?: Maybe<Array<Maybe<Timetable>>>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum ClubStatus {
  Approved = 'approved',
  Declined = 'declined',
  Pending = 'pending'
}

export type CreateClubInput = {
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  maxMember: Scalars['Int']['input'];
  minMember: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  preferredTeachers?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<ClubStatus>;
  teacherId?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type CreateTimetableInput = {
  clubId: Scalars['String']['input'];
  clubStartTime: Scalars['String']['input'];
  date: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  room: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createClub?: Maybe<Club>;
  createClubWithSchedules?: Maybe<Club>;
  createTimetable?: Maybe<Timetable>;
  deleteClub?: Maybe<Scalars['ID']['output']>;
  deleteTimetable?: Maybe<Scalars['Boolean']['output']>;
  updateClub?: Maybe<Club>;
  updateTimetable?: Maybe<Timetable>;
};


export type MutationCreateClubArgs = {
  input: CreateClubInput;
};


export type MutationCreateClubWithSchedulesArgs = {
  classroom: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  frequency: Scalars['String']['input'];
  input: CreateClubInput;
  selectedDays?: InputMaybe<Array<Scalars['String']['input']>>;
  startDate: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};


export type MutationCreateTimetableArgs = {
  input: CreateTimetableInput;
};


export type MutationDeleteClubArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTimetableArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateClubArgs = {
  input: UpdateClubInput;
};


export type MutationUpdateTimetableArgs = {
  input: UpdateTimetableInput;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  getAllApprovedClubs: Array<Club>;
  getAllClubs: Array<Club>;
  getAllPendingClubs: Array<Club>;
  getClubById?: Maybe<Club>;
  getTimetableByClub?: Maybe<Array<Maybe<Timetable>>>;
  getTimetables?: Maybe<Array<Maybe<Timetable>>>;
};


export type QueryGetClubByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTimetableByClubArgs = {
  clubId: Scalars['ID']['input'];
};

export type Timetable = {
  __typename?: 'Timetable';
  club?: Maybe<Club>;
  clubId: Scalars['String']['output'];
  clubStartTime: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  date: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  room: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UpdateClubInput = {
  id: Scalars['ID']['input'];
  maxMember?: InputMaybe<Scalars['Int']['input']>;
  minMember?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ClubStatus>;
  teacherId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTimetableInput = {
  clubStartTime?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  room?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllClubsQuery = { __typename?: 'Query', getAllClubs: Array<{ __typename?: 'Club', id: string, name: string, description?: string | null, creatorId?: string | null, teacherId?: string | null, type: string, status: ClubStatus, preferredTeachers?: Array<string | null> | null, minMember: number, maxMember: number, timetables?: Array<{ __typename?: 'Timetable', id: string, clubId: string, date: string, room: string, clubStartTime: string, duration: number } | null> | null }> };


export const GetAllClubsDocument = gql`
    query GetAllClubs {
  getAllClubs {
    id
    name
    description
    creatorId
    teacherId
    type
    status
    preferredTeachers
    minMember
    maxMember
    timetables {
      id
      clubId
      date
      room
      clubStartTime
      duration
    }
  }
}
    `;

/**
 * __useGetAllClubsQuery__
 *
 * To run a query within a React component, call `useGetAllClubsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllClubsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllClubsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllClubsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllClubsQuery, GetAllClubsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAllClubsQuery, GetAllClubsQueryVariables>(GetAllClubsDocument, options);
      }
export function useGetAllClubsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllClubsQuery, GetAllClubsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAllClubsQuery, GetAllClubsQueryVariables>(GetAllClubsDocument, options);
        }
// @ts-ignore
export function useGetAllClubsSuspenseQuery(baseOptions?: ApolloReactHooks.SuspenseQueryHookOptions<GetAllClubsQuery, GetAllClubsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllClubsQuery, GetAllClubsQueryVariables>;
export function useGetAllClubsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllClubsQuery, GetAllClubsQueryVariables>): ApolloReactHooks.UseSuspenseQueryResult<GetAllClubsQuery | undefined, GetAllClubsQueryVariables>;
export function useGetAllClubsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAllClubsQuery, GetAllClubsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAllClubsQuery, GetAllClubsQueryVariables>(GetAllClubsDocument, options);
        }
export type GetAllClubsQueryHookResult = ReturnType<typeof useGetAllClubsQuery>;
export type GetAllClubsLazyQueryHookResult = ReturnType<typeof useGetAllClubsLazyQuery>;
export type GetAllClubsSuspenseQueryHookResult = ReturnType<typeof useGetAllClubsSuspenseQuery>;
export type GetAllClubsQueryResult = Apollo.QueryResult<GetAllClubsQuery, GetAllClubsQueryVariables>;