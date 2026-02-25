import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing/react';
import {
  useAdminClubsData,
  removeClub,
  getIsLoading,
  getIsError,
  getErrorMessage,
} from '../../app/_components/teacher/main/use-admin-clubs-data';
import type { AdminClubsData } from '../../app/_components/teacher/main/use-admin-clubs-data';
import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_PENDING_CLUBS,
} from '../../libs/club-queries';

const mockApprovedClub = {
  id: 'approved-1',
  name: 'Approved Club',
  description: 'Approved desc',
  creatorId: 'c1',
  teacherId: 't1',
  type: 'club',
  status: 'approved',
  minMember: 5,
  maxMember: 10,
  timetables: [
    {
      id: 'tt1',
      clubId: 'approved-1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

const mockPendingClub = {
  id: 'pending-1',
  name: 'Pending Club',
  description: 'Pending desc',
  creatorId: 'c2',
  teacherId: 't2',
  type: 'club',
  status: 'pending',
  preferredTeachers: null,
  minMember: 2,
  maxMember: 8,
  timetables: [
    {
      id: 'tt2',
      clubId: 'pending-1',
      date: '2025-02-01',
      room: '202',
      clubStartTime: '14:00',
      duration: 90,
    },
  ],
};

const approvedMocks = [
  {
    request: { query: GET_ALL_APPROVED_CLUBS },
    result: {
      data: {
        getAllApprovedClubs: [mockApprovedClub],
      },
    },
  },
];

const pendingMocks = [
  {
    request: { query: GET_ALL_PENDING_CLUBS },
    result: {
      data: {
        getAllPendingClubs: [mockPendingClub],
      },
    },
  },
];

const TestHarness = ({ _mocks }: { _mocks: typeof approvedMocks }) => {
  const data = useAdminClubsData();
  return (
    <div>
      <span data-testid="approved-count">{data.approved.length}</span>
      <span data-testid="pending-count">{data.pending.length}</span>
      <span data-testid="loading">{String(getIsLoading(data))}</span>
      <span data-testid="error">{String(getIsError(data))}</span>
      <span data-testid="error-message">{getErrorMessage(data)}</span>
      {data.approved[0] && (
        <span data-testid="approved-name">{data.approved[0].name}</span>
      )}
      {data.pending[0] && (
        <span data-testid="pending-name">{data.pending[0].name}</span>
      )}
    </div>
  );
};

describe('useAdminClubsData', () => {
  it('loads approved and pending clubs and maps them via mapGetAllClubsToClubs', async () => {
    render(
      <MockedProvider
        mocks={[...approvedMocks, ...pendingMocks]}
        addTypename={false}
      >
        <TestHarness mocks={approvedMocks} />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('approved-count')).toHaveTextContent('1');
    });
    await waitFor(() => {
      expect(screen.getByTestId('pending-count')).toHaveTextContent('1');
    });

    expect(screen.getByTestId('approved-name')).toHaveTextContent(
      'Approved Club'
    );
    expect(screen.getByTestId('pending-name')).toHaveTextContent(
      'Pending Club'
    );
  });

  it('returns loading state when queries are in flight', () => {
    const neverResolve = () => new Promise<never>(() => {});
    const loadingMocks = [
      { request: { query: GET_ALL_APPROVED_CLUBS }, result: neverResolve() },
      { request: { query: GET_ALL_PENDING_CLUBS }, result: neverResolve() },
    ];
    render(
      <MockedProvider mocks={loadingMocks} addTypename={false}>
        <TestHarness mocks={approvedMocks} />
      </MockedProvider>
    );
    expect(screen.getByTestId('loading')).toHaveTextContent('true');
  });
});

describe('removeClub', () => {
  it('filters out club by id', () => {
    const clubs = [
      { id: '1', name: 'A' },
      { id: '2', name: 'B' },
    ] as AdminClubsData['approved'];
    expect(removeClub(clubs, '2')).toHaveLength(1);
    expect(removeClub(clubs, '2')[0].id).toBe('1');
  });

  it('returns empty array when last club removed', () => {
    const clubs = [{ id: '1', name: 'A' }] as AdminClubsData['approved'];
    expect(removeClub(clubs, '1')).toEqual([]);
  });
});

describe('getIsLoading', () => {
  it('returns true when loadingApproved is true', () => {
    const d = {
      loadingApproved: true,
      loadingPending: false,
    } as AdminClubsData;
    expect(getIsLoading(d)).toBe(true);
  });

  it('returns true when loadingPending is true', () => {
    const d = {
      loadingApproved: false,
      loadingPending: true,
    } as AdminClubsData;
    expect(getIsLoading(d)).toBe(true);
  });

  it('returns false when both false', () => {
    const d = {
      loadingApproved: false,
      loadingPending: false,
    } as AdminClubsData;
    expect(getIsLoading(d)).toBe(false);
  });
});

describe('getIsError', () => {
  it('returns true when errorApproved is set', () => {
    const d = {
      errorApproved: new Error('err'),
      errorPending: null,
    } as AdminClubsData;
    expect(getIsError(d)).toBe(true);
  });

  it('returns true when errorPending is set', () => {
    const d = {
      errorApproved: null,
      errorPending: new Error('pending err'),
    } as AdminClubsData;
    expect(getIsError(d)).toBe(true);
  });

  it('returns false when both null', () => {
    const d = {
      errorApproved: null,
      errorPending: null,
    } as AdminClubsData;
    expect(getIsError(d)).toBe(false);
  });
});

describe('getErrorMessage', () => {
  it('returns approved error message when errorApproved is set', () => {
    const d = {
      errorApproved: new Error('Approved failed'),
      errorPending: null,
    } as AdminClubsData;
    expect(getErrorMessage(d)).toBe('Approved failed');
  });

  it('returns pending error message when errorPending is set', () => {
    const d = {
      errorApproved: null,
      errorPending: new Error('Pending failed'),
    } as AdminClubsData;
    expect(getErrorMessage(d)).toBe('Pending failed');
  });

  it('returns empty string when no errors', () => {
    const d = {
      errorApproved: null,
      errorPending: null,
    } as AdminClubsData;
    expect(getErrorMessage(d)).toBe('');
  });
});
