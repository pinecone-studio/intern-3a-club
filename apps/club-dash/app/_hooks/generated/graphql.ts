import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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
  clubTerm?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  creatorId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  frequency: ClubFrequency;
  id: Scalars['ID']['output'];
  maxMember: Scalars['Int']['output'];
  minMember: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  preferredTeachers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: ClubStatus;
  teacherId?: Maybe<Scalars['String']['output']>;
  timetables?: Maybe<Array<Maybe<Timetable>>>;
  type: ClubType;
  updatedAt: Scalars['String']['output'];
};

export enum ClubFrequency {
  Once = 'ONCE',
  Weekly = 'WEEKLY'
}

export enum ClubStatus {
  Approved = 'approved',
  Declined = 'declined',
  Pending = 'pending'
}

export enum ClubType {
  Mentor = 'mentor',
  Self = 'self'
}

export type CreateClubInput = {
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
  syncUser: SyncResponse;
  updateClub?: Maybe<Club>;
  updateTimetable?: Maybe<Timetable>;
};


export type MutationCreateClubArgs = {
  input: CreateClubInput;
};


export type MutationCreateClubWithSchedulesArgs = {
  clubTerm?: InputMaybe<Scalars['String']['input']>;
  frequency: Scalars['String']['input'];
  input: CreateClubInput;
  schedules: Array<ScheduleInput>;
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
  getAllStudents: Array<Student>;
  getAllTeachers: Array<Teacher>;
  getClubById?: Maybe<Club>;
  getStudentById?: Maybe<Student>;
  getTeacherById?: Maybe<Teacher>;
  getTimetableByClub?: Maybe<Array<Maybe<Timetable>>>;
  getTimetables?: Maybe<Array<Maybe<Timetable>>>;
};


export type QueryGetClubByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetStudentByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTeacherByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTimetableByClubArgs = {
  clubId: Scalars['ID']['input'];
};

export type ScheduleInput = {
  clubStartTime: Scalars['String']['input'];
  date: Scalars['String']['input'];
  duration: Scalars['Int']['input'];
  room: Scalars['String']['input'];
};

export type Student = {
  __typename?: 'Student';
  authUserId?: Maybe<Scalars['String']['output']>;
  azureEmail: Scalars['String']['output'];
  classId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  personalEmail?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  studentCode?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SyncResponse = Student | Teacher;

export type Teacher = {
  __typename?: 'Teacher';
  authUserId?: Maybe<Scalars['String']['output']>;
  azureEmail: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  personalEmail?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
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
  status?: InputMaybe<ClubStatus>;
  teacherId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTimetableInput = {
  clubStartTime?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  room?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClubWithSchedulesMutationVariables = Exact<{
  input: CreateClubInput;
  schedules: Array<ScheduleInput> | ScheduleInput;
  frequency: Scalars['String']['input'];
  clubTerm: Scalars['String']['input'];
}>;


export type CreateClubWithSchedulesMutation = { __typename?: 'Mutation', createClubWithSchedules?: { __typename?: 'Club', id: string, name: string } | null };

export type DeleteClubMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteClubMutation = { __typename?: 'Mutation', deleteClub?: string | null };

export type GetAllApprovedClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllApprovedClubsQuery = { __typename?: 'Query', getAllApprovedClubs: Array<{ __typename?: 'Club', id: string, name: string, description?: string | null, creatorId?: string | null, teacherId?: string | null, type: ClubType, status: ClubStatus, minMember: number, maxMember: number, frequency: ClubFrequency, clubTerm?: string | null, timetables?: Array<{ __typename?: 'Timetable', id: string, clubId: string, date: string, room: string, clubStartTime: string, duration: number } | null> | null }> };

export type GetAllClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllClubsQuery = { __typename?: 'Query', getAllClubs: Array<{ __typename?: 'Club', id: string, name: string, description?: string | null, creatorId?: string | null, teacherId?: string | null, type: ClubType, status: ClubStatus, preferredTeachers?: Array<string | null> | null, minMember: number, maxMember: number, frequency: ClubFrequency, clubTerm?: string | null, timetables?: Array<{ __typename?: 'Timetable', id: string, clubId: string, date: string, room: string, clubStartTime: string, duration: number } | null> | null }> };

export type GetAllPendingClubsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPendingClubsQuery = { __typename?: 'Query', getAllPendingClubs: Array<{ __typename?: 'Club', id: string, name: string, description?: string | null, creatorId?: string | null, teacherId?: string | null, type: ClubType, status: ClubStatus, preferredTeachers?: Array<string | null> | null, minMember: number, maxMember: number, frequency: ClubFrequency, clubTerm?: string | null, timetables?: Array<{ __typename?: 'Timetable', id: string, clubId: string, date: string, room: string, clubStartTime: string, duration: number } | null> | null }> };

export type GetAllTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeachersQuery = { __typename?: 'Query', getAllTeachers: Array<{ __typename?: 'Teacher', id: string, firstName?: string | null, lastName?: string | null, profilePicture?: string | null }> };

export type SyncUserMutationVariables = Exact<{ [key: string]: never; }>;


export type SyncUserMutation = { __typename?: 'Mutation', syncUser:
    | { __typename: 'Student', id: string, authUserId?: string | null, azureEmail: string, firstName?: string | null, lastName?: string | null, classId?: string | null }
    | { __typename: 'Teacher', id: string, authUserId?: string | null, azureEmail: string, firstName?: string | null, lastName?: string | null }
   };

export type UpdateTimetableMutationVariables = Exact<{
  input: UpdateTimetableInput;
}>;


export type UpdateTimetableMutation = { __typename?: 'Mutation', updateTimetable?: { __typename?: 'Timetable', id: string, date: string, room: string, clubStartTime: string, duration: number } | null };


export const CreateClubWithSchedulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateClubWithSchedules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateClubInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"schedules"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ScheduleInput"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"frequency"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"clubTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createClubWithSchedules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"schedules"},"value":{"kind":"Variable","name":{"kind":"Name","value":"schedules"}}},{"kind":"Argument","name":{"kind":"Name","value":"frequency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"frequency"}}},{"kind":"Argument","name":{"kind":"Name","value":"clubTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"clubTerm"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CreateClubWithSchedulesMutation, CreateClubWithSchedulesMutationVariables>;
export const DeleteClubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteClub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteClub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteClubMutation, DeleteClubMutationVariables>;
export const GetAllApprovedClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllApprovedClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllApprovedClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"teacherId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"minMember"}},{"kind":"Field","name":{"kind":"Name","value":"maxMember"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"clubTerm"}},{"kind":"Field","name":{"kind":"Name","value":"timetables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"clubStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllApprovedClubsQuery, GetAllApprovedClubsQueryVariables>;
export const GetAllClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"teacherId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"preferredTeachers"}},{"kind":"Field","name":{"kind":"Name","value":"minMember"}},{"kind":"Field","name":{"kind":"Name","value":"maxMember"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"clubTerm"}},{"kind":"Field","name":{"kind":"Name","value":"timetables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"clubStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllClubsQuery, GetAllClubsQueryVariables>;
export const GetAllPendingClubsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllPendingClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllPendingClubs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creatorId"}},{"kind":"Field","name":{"kind":"Name","value":"teacherId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"preferredTeachers"}},{"kind":"Field","name":{"kind":"Name","value":"minMember"}},{"kind":"Field","name":{"kind":"Name","value":"maxMember"}},{"kind":"Field","name":{"kind":"Name","value":"frequency"}},{"kind":"Field","name":{"kind":"Name","value":"clubTerm"}},{"kind":"Field","name":{"kind":"Name","value":"timetables"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"clubId"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"clubStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllPendingClubsQuery, GetAllPendingClubsQueryVariables>;
export const GetAllTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]} as unknown as DocumentNode<GetAllTeachersQuery, GetAllTeachersQueryVariables>;
export const SyncUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SyncUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authUserId"}},{"kind":"Field","name":{"kind":"Name","value":"azureEmail"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Student"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authUserId"}},{"kind":"Field","name":{"kind":"Name","value":"azureEmail"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"classId"}}]}}]}}]}}]} as unknown as DocumentNode<SyncUserMutation, SyncUserMutationVariables>;
export const UpdateTimetableDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTimetable"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTimetableInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTimetable"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"clubStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]} as unknown as DocumentNode<UpdateTimetableMutation, UpdateTimetableMutationVariables>;