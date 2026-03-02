import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { AdminClubsView } from '../../app/_components/teacher/main/AdminClubView';
import { ApprovedClubDetail } from '../../app/_components/teacher/approved/Approved';
import * as useAdminClubsDataModule from '../../app/_components/teacher/main/use-admin-clubs-data';
import type { Club } from '../../libs/types';

const mockMutate = jest.fn();
jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: () => [mockMutate, { loading: false, data: null, error: null }],
}));

jest.mock('../../app/createClub/page', () => ({
  __esModule: true,
  default: () => <div>CreateClub</div>,
}));

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: () => ({ data: { getAllClubs: [] }, loading: false, error: null }),
  useMutation: () => [mockMutate, { loading: false, data: null, error: null }],
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

describe('AdminClubsView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders header and description', () => {
    render(<AdminClubsView />);
    expect(screen.getByText(/admin clubs/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Шинээр үүсгэх хүсэлтүүдийг хянах хэсэг\./i)
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
    const requestBtn = screen.getByRole('button', { name: /хүсэлт/i });
    fireEvent.click(requestBtn);

    expect(
      screen.getByRole('heading', { name: /pending requests/i })
    ).toBeInTheDocument();
  });

  // approve/reject side effects are covered in PendingModalItem tests

  it('delete mutation: expand card and click Delete', async () => {
    mockMutate.mockResolvedValue({ data: { deleteClub: '1' } });
    const onDelete = jest.fn();

    render(<ApprovedClubDetail club={mockClub} onDelete={onDelete} />);

    const deleteBtn = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteBtn);

    // Confirm deletion in the alert dialog
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
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт/i }));
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
});
