import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pending } from '../../../app/_components/teacher/pending/Pending';
import type { PendingClubsData } from '../../../libs/types';

const mockUseQuery = jest.fn();
const mockUseMutation = jest.fn();

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: (...args: unknown[]) => mockUseQuery(...args),
  useMutation: (...args: unknown[]) => mockUseMutation(...args),
}));

jest.mock(
  '../../../app/_components/teacher/pending/PendingModal',
  () => {
    return {
      PendingModal: (props: {
        pending: PendingClubsData['getAllPendingClubs'];
        onApprove: (
          _club: PendingClubsData['getAllPendingClubs'][number]
        ) => void;
        onReject: (
          _club: PendingClubsData['getAllPendingClubs'][number]
        ) => void;
      }) => (
        <div>
          <h1>Pending Requests</h1>
          <button
            type="button"
            onClick={() => props.onApprove(props.pending[0])}
          >
            Approve
          </button>
          <button
            type="button"
            onClick={() => props.onReject(props.pending[0])}
          >
            Reject
          </button>
        </div>
      ),
    };
  }
);

describe('Pending', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders pending count from mapped data', () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([jest.fn(), {}]);

    render(<Pending />);

    expect(
      screen.getByRole('button', { name: /pending \(1\)/i })
    ).toBeInTheDocument();
  });

  it('opens modal when button clicked', async () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([jest.fn(), {}]);

    render(<Pending />);

    fireEvent.click(screen.getByRole('button', { name: /pending \(1\)/i }));

    await waitFor(() => {
      expect(screen.getByText(/pending requests/i)).toBeInTheDocument();
    });
  });

  it('calls updateClub with approved status when approving a club', async () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    const mutate = jest.fn();
    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([mutate, {}]);

    render(<Pending />);

    fireEvent.click(screen.getByRole('button', { name: /pending \(1\)/i }));
    fireEvent.click(screen.getByRole('button', { name: /approve/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        variables: {
          input: {
            id: '1',
            status: 'approved',
          },
        },
      });
    });
  });

  it('calls updateClub with declined status when rejecting a club', async () => {
    const data: PendingClubsData = {
      getAllPendingClubs: [
        {
          id: '1',
          name: 'Club 1',
          description: 'd1',
          teacherId: 't1',
          minMember: 5,
          maxMember: 10,
          status: 'pending',
          timetables: [],
        },
      ],
    };

    const mutate = jest.fn();
    mockUseQuery.mockReturnValue({ data, loading: false, error: undefined });
    mockUseMutation.mockReturnValue([mutate, {}]);

    render(<Pending />);

    fireEvent.click(screen.getByRole('button', { name: /pending \(1\)/i }));
    fireEvent.click(screen.getByRole('button', { name: /reject/i }));

    await waitFor(() => {
      expect(mutate).toHaveBeenCalledWith({
        variables: {
          input: {
            id: '1',
            status: 'declined',
          },
        },
      });
    });
  });
});
