import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ClubsContent } from '../../app/JoinClub/_components/ClubsContent';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_TEACHERS,
} from '../../lib/club-query';
import { useClubAction } from '../../app/_hooks/use-redis-hook';
import { MockedProvider } from '@apollo/client/testing/react';

jest.mock('../../app/_hooks/use-redis-hook');
jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ userId: 'test-user-id' }),
  useUser: () => ({ user: { id: 'test-user-id' } }),
  useClerk: () => ({ signOut: jest.fn() }),
}));

const mockUseClubAction = jest.mocked(useClubAction);

const mockClub = {
  id: 'club-1',
  name: 'Test Club',
  description: 'Test description',
  type: 'Premium',
  status: 'ACTIVE',
  teacherId: 'teacher-1',
  creatorId: 'creator-1',
  frequency: 'WEEKLY',
  clubTerm: 'FIRST',
  minMember: 5,
  maxMember: 20,
  timetables: [],
};

const mockClub2 = {
  id: 'club-2',
  name: 'Second Club',
  description: 'Second description',
  type: 'Standard',
  status: 'ACTIVE',
  teacherId: 'teacher-1',
  creatorId: 'creator-1',
  frequency: 'WEEKLY',
  clubTerm: 'FIRST',
  minMember: 5,
  maxMember: 20,
  timetables: [],
};

const mockTeacher = {
  id: 'teacher-1',
  firstName: 'Болд',
  lastName: 'Баатар',
  profilePicture: '',
};

const successMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: { data: { getAllApprovedClubs: [mockClub] } },
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [mockTeacher] } },
  },
];

const twoClubMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: { data: { getAllApprovedClubs: [mockClub, mockClub2] } },
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [mockTeacher] } },
  },
];

const emptyMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: { data: { getAllApprovedClubs: [] } },
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } },
  },
];

const errorMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    error: new Error('Network error'),
  },
  {
    request: { query: GET_ALL_TEACHERS },
    result: { data: { getAllTeachers: [] } },
  },
];

const createHookReturn = (overrides = {}) => ({
  remainingTime: null,
  banned: false,
  loading: false,
  handleEnroll: jest.fn(),
  handleLeave: jest.fn(),
  ...overrides,
});

describe('ClubsContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseClubAction.mockReturnValue(createHookReturn());
  });

  it('loading үед "Уншиж байна..." харуулна', () => {
    render(
      <MockedProvider mocks={successMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    expect(screen.getByText('Уншиж байна...')).toBeInTheDocument();
  });

  it('алдаа гарсан үед алдааны мессеж харуулна', async () => {
    render(
      <MockedProvider mocks={errorMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() => expect(screen.getByText(/Алдаа/)).toBeInTheDocument());
  });

  it('дата амжилттай ирсэн үед клубын нэр харуулна', async () => {
    render(
      <MockedProvider mocks={successMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );
  });

  it('хоосон дата ирсэн үед "Клуб сонгоно уу" харуулна', async () => {
    render(
      <MockedProvider mocks={emptyMocks}>
        <ClubsContent />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getByText('Клуб сонгоно уу')).toBeInTheDocument()
    );
  });

  it('userId prop дамжуулсан үед render хийгдэнэ', async () => {
    render(
      <MockedProvider mocks={successMocks}>
        <ClubsContent userId="test-user" />
      </MockedProvider>
    );
    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );
  });

  it('onEnroll дуудагдсан үед клуб enrolled болно', async () => {
    mockUseClubAction.mockImplementation(({ onEnrollSuccess }) =>
      createHookReturn({ handleEnroll: () => onEnrollSuccess() })
    );

    render(
      <MockedProvider mocks={successMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));

    await waitFor(() =>
      expect(screen.getByText('Клубээс гарах')).toBeInTheDocument()
    );
  });

  it('onLeave дуудагдсан үед клубаас гарна', async () => {
    mockUseClubAction.mockImplementation(
      ({ onEnrollSuccess, onLeaveSuccess }) =>
        createHookReturn({
          handleEnroll: () => onEnrollSuccess(),
          handleLeave: () => onLeaveSuccess(),
        })
    );

    render(
      <MockedProvider mocks={successMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() =>
      expect(screen.getByText('Клубээс гарах')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByText('Клубээс гарах'));
    await waitFor(() =>
      expect(screen.getByText('Клубт элсэх')).toBeInTheDocument()
    );
  });

  it('хоёр клуб байх үед compareByEnrollment ажиллана', async () => {
    mockUseClubAction.mockImplementation(({ onEnrollSuccess }) =>
      createHookReturn({ handleEnroll: () => onEnrollSuccess() })
    );

    render(
      <MockedProvider mocks={twoClubMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));

    await waitFor(() => expect(screen.getByText('Элссэн')).toBeInTheDocument());
  });

  it('enrolled=false клуб сүүлд байрлана (compareByEnrollment false branch)', async () => {
    mockUseClubAction.mockImplementation(({ onEnrollSuccess }) =>
      createHookReturn({ handleEnroll: () => onEnrollSuccess() })
    );

    render(
      <MockedProvider mocks={twoClubMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Second Club'));

    await waitFor(() =>
      expect(screen.getAllByText('Second Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));

    await waitFor(() => expect(screen.getByText('Элссэн')).toBeInTheDocument());
  });

  it('onLeave дотор selectedClubId таарахгүй клуб өөрчлөгдөхгүй', async () => {
    mockUseClubAction.mockImplementation(
      ({ onEnrollSuccess, onLeaveSuccess }) =>
        createHookReturn({
          handleEnroll: () => onEnrollSuccess(),
          handleLeave: () => onLeaveSuccess(),
        })
    );

    render(
      <MockedProvider mocks={twoClubMocks}>
        <ClubsContent />
      </MockedProvider>
    );

    await waitFor(() =>
      expect(screen.getAllByText('Test Club').length).toBeGreaterThan(0)
    );

    fireEvent.click(screen.getByText('Клубт элсэх'));
    await waitFor(() =>
      expect(screen.getByText('Клубээс гарах')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByText('Клубээс гарах'));
    await waitFor(() =>
      expect(screen.getByText('Клубт элсэх')).toBeInTheDocument()
    );
  });
});
