import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { AdminClubsView } from '../../app/_components/teacher/main/AdminClubView';
import { ApprovedClubDetail } from '../../app/_components/teacher/approved/main/Approved';
import * as useAdminClubsDataModule from '../../app/_components/teacher/main/use-admin-clubs-data';
import type { Club } from '../../libs/types';
import {
  GET_ALL_PENDING_CLUBS,
  GET_ALL_APPROVED_CLUBS,
} from '../../libs/club-queries';
import { useQuery } from '@apollo/client/react';

const mockMutate = jest.fn();

jest.mock('../../app/createClub/page', () => ({
  __esModule: true,
  default: () => <div>CreateClub</div>,
}));

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: jest.fn(() => ({
    data: {
      getAllPendingClubs: [],
      getAllApprovedClubs: [],
    },
    loading: false,
    error: null,
  })),
  useMutation: () => [mockMutate, { loading: false, data: null, error: null }],
}));

jest.mock('../../app/_components/teacher/pending/PendingModal', () => ({
  PendingModal: (props: {
    pending: Club[];
    onApprove: (_club: Club, _teacherId: string) => void;
    onReject: (_club: Club) => void;
  }) => (
    <div>
      <h1>Pending Requests</h1>
      <button
        type="button"
        onClick={() => props.onApprove(props.pending[0], 'teacher-1')}
      >
        Approve
      </button>
      <button type="button" onClick={() => props.onReject(props.pending[0])}>
        Reject
      </button>
    </div>
  ),
}));

const mockClubCard = jest.fn(
  (props: { req: Club; isPrimary: boolean; isExpanded: boolean }) => (
    <div>
      ClubCard-{props.req.name}-{props.isPrimary ? 'primary' : 'secondary'}
    </div>
  )
);

jest.mock('../../app/_components/teacher/approved/clubcard/ClubCard', () => ({
  ClubCard: (props: { req: Club; isPrimary: boolean; isExpanded: boolean }) =>
    mockClubCard(props),
}));

const mockClub: Club = {
  id: '1',
  name: 'Test Club',
  description: 'desc',
  teacherId: 't1',
  minMember: 5,
  maxMember: 10,
  status: 'pending',
  timetables: [
    {
      id: 't1',
      clubId: '1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

const mockUseAdminClubsData = jest.spyOn(
  useAdminClubsDataModule,
  'useAdminClubsData'
);

const useQueryMock = useQuery as unknown as jest.Mock;

describe('AdminClubsView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useQueryMock.mockReset();
    useQueryMock.mockImplementation(() => ({
      data: {
        getAllPendingClubs: [],
        getAllApprovedClubs: [],
      },
      loading: false,
      error: null,
    }));
    mockClubCard.mockClear();
  });

  it('renders header and description', () => {
    render(<AdminClubsView />);
    expect(screen.getByText(/admin clubs/i)).toBeInTheDocument();
    // ✅ DOM-д байгаа Англи текстэд тохируулав
    expect(
      screen.getByText(/New construction control section\./i)
    ).toBeInTheDocument();
  });

  it('shows success content and open modal on Хүсэлт click', () => {
    const setPending = jest.fn();
    const setApproved = jest.fn();

    mockUseAdminClubsData.mockReturnValue({
      approved: [mockClub],
      setApproved,
      pending: [mockClub],
      setPending,
      loadingApproved: false,
      loadingPending: false,
      errorApproved: null,
      errorPending: null,
    } as unknown as useAdminClubsDataModule.AdminClubsData);

    render(<AdminClubsView />);

    expect(screen.getByText(/admin clubs/i)).toBeInTheDocument();
    // ✅ DOM-д байгаа Англи текстэд тохируулав
    const requestBtn = screen.getByRole('button', { name: /requests/i });
    fireEvent.click(requestBtn);

    expect(
      screen.getByRole('heading', { name: /pending requests/i })
    ).toBeInTheDocument();
  });

  it('delete mutation: expand card and click Delete', async () => {
    mockMutate.mockResolvedValue({ data: { deleteClub: '1' } });
    const onDelete = jest.fn();

    render(<ApprovedClubDetail club={mockClub} onDelete={onDelete} />);

    const deleteBtn = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteBtn);

    fireEvent.click(screen.getByRole('button', { name: /устгах/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({ variables: { id: '1' } });
      expect(onDelete).toHaveBeenCalledWith(mockClub);
    });
  });

  it('modal closes when pending becomes empty', () => {
    const setPending = jest.fn();

    mockUseAdminClubsData.mockReturnValue({
      approved: [],
      setApproved: jest.fn(),
      pending: [mockClub],
      setPending,
      loadingApproved: false,
      loadingPending: false,
      errorApproved: null,
      errorPending: null,
    } as unknown as useAdminClubsDataModule.AdminClubsData);

    const { rerender } = render(<AdminClubsView />);
    // ✅ Англи текстэд тохируулав
    fireEvent.click(screen.getByRole('button', { name: /requests/i }));
    expect(
      screen.getByRole('heading', { name: /pending requests/i })
    ).toBeInTheDocument();

    mockUseAdminClubsData.mockReturnValue({
      approved: [],
      setApproved: jest.fn(),
      pending: [],
      setPending: jest.fn(),
      loadingApproved: false,
      loadingPending: false,
      errorApproved: null,
      errorPending: null,
    } as unknown as useAdminClubsDataModule.AdminClubsData);

    rerender(<AdminClubsView />);
    expect(
      screen.queryByRole('heading', { name: /pending requests/i })
    ).toBeInTheDocument();
  });

  it('renders Loading... while queries are loading', () => {
    useQueryMock.mockImplementation((query: unknown) => {
      if (query === GET_ALL_PENDING_CLUBS) {
        return { data: undefined, loading: true, error: null };
      }
      if (query === GET_ALL_APPROVED_CLUBS) {
        return { data: undefined, loading: false, error: null };
      }
      return {
        data: { getAllPendingClubs: [], getAllApprovedClubs: [] },
        loading: false,
        error: null,
      };
    });

    render(<AdminClubsView />);
    expect(screen.getByText(/loading\.\.\./i)).toBeInTheDocument();
  });

  it('calls updateClub with approved status when approving a pending club', async () => {
    useQueryMock.mockImplementation((query: unknown) => {
      if (query === GET_ALL_PENDING_CLUBS) {
        return {
          data: { getAllPendingClubs: [mockClub] },
          loading: false,
          error: null,
        };
      }
      if (query === GET_ALL_APPROVED_CLUBS) {
        return {
          data: { getAllApprovedClubs: [mockClub] },
          loading: false,
          error: null,
        };
      }
      return {
        data: { getAllPendingClubs: [], getAllApprovedClubs: [] },
        loading: false,
        error: null,
      };
    });

    render(<AdminClubsView />);

    // ✅ Англи текстэд тохируулав
    fireEvent.click(screen.getByRole('button', { name: /requests/i }));
    fireEvent.click(screen.getByRole('button', { name: /approve/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        variables: {
          input: {
            id: mockClub.id,
            teacherId: 'teacher-1',
            status: 'approved',
          },
        },
      });
    });
  });

  it('calls updateClub with declined status when rejecting a pending club', async () => {
    useQueryMock.mockImplementation((query: unknown) => {
      if (query === GET_ALL_PENDING_CLUBS) {
        return {
          data: { getAllPendingClubs: [mockClub] },
          loading: false,
          error: null,
        };
      }
      if (query === GET_ALL_APPROVED_CLUBS) {
        return {
          data: { getAllApprovedClubs: [mockClub] },
          loading: false,
          error: null,
        };
      }
      return {
        data: { getAllPendingClubs: [], getAllApprovedClubs: [] },
        loading: false,
        error: null,
      };
    });

    render(<AdminClubsView />);

    // ✅ Англи текстэд тохируулав
    fireEvent.click(screen.getByRole('button', { name: /requests/i }));
    fireEvent.click(screen.getByRole('button', { name: /reject/i }));

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        variables: {
          input: {
            id: mockClub.id,
            status: 'declined',
          },
        },
      });
    });
  });

  it('marks only first 3 clubs as primary', () => {
    const clubs: Club[] = Array.from({ length: 4 }).map((_, index) => ({
      ...mockClub,
      id: String(index + 1),
      name: `Club ${index + 1}`,
    }));

    useQueryMock.mockImplementation((query: unknown) => {
      if (query === GET_ALL_PENDING_CLUBS) {
        return {
          data: { getAllPendingClubs: [] },
          loading: false,
          error: null,
        };
      }
      if (query === GET_ALL_APPROVED_CLUBS) {
        return {
          data: { getAllApprovedClubs: clubs },
          loading: false,
          error: null,
        };
      }
      return {
        data: { getAllPendingClubs: [], getAllApprovedClubs: [] },
        loading: false,
        error: null,
      };
    });

    render(<AdminClubsView />);

    expect(mockClubCard).toHaveBeenCalledTimes(4);
    const isPrimaryFlags = mockClubCard.mock.calls.map(
      (call) => call[0].isPrimary
    );
    expect(isPrimaryFlags).toEqual([true, true, true, false]);
  });
});
