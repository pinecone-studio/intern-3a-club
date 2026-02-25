import { render, fireEvent, screen } from '@testing-library/react';
import { ApprovedClubDetail } from '../../app/_components/teacher/approved/Approved';
import type { Club } from '../../libs/types';

const mockMutate = jest.fn();
jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: () => [mockMutate, { loading: false, data: null, error: null }],
}));

jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useQuery: () => ({ data: { getAllClubs: [] }, loading: false, error: null }),
  useMutation: () => [mockMutate, { loading: false, data: null, error: null }],
}));

const club: Club = {
  id: '1',
  name: 'Test Club',
  description: 'goal',
  teacherId: 't1',
  minMember: 5,
  maxMember: 10,
  status: 'approved',
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

describe('ApprovedClubDetail', () => {
  const confirmSpy = jest
    .spyOn(window, 'confirm')
    .mockImplementation(() => true);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('opens edit dialog when Edit clicked', () => {
    render(<ApprovedClubDetail club={club} onDelete={undefined} />);

    // эхлээд dialog харагдахгүй байх ёстой
    expect(screen.queryByText(/Schedule edit/i)).not.toBeInTheDocument();

    // Edit товчийг дарна
    fireEvent.click(screen.getByText(/edit/i));

    // EditTimetableDialog нээгдсэн эсэхийг title-ээр нь шалгана
    expect(screen.getByText(/Schedule edit/i)).toBeInTheDocument();
  });

  it('calls delete mutation when Delete clicked and confirm true', async () => {
    mockMutate.mockResolvedValue({ data: { deleteClub: '1' } });
    render(
      <ApprovedClubDetail club={club} onEdit={() => {}} onDelete={undefined} />
    );

    fireEvent.click(screen.getByText(/delete/i));
    expect(confirmSpy).toHaveBeenCalled();
    await expect(mockMutate).toHaveBeenCalledWith({ variables: { id: '1' } });
  });

  it('does not call delete when confirm false', () => {
    confirmSpy.mockReturnValueOnce(false);
    render(<ApprovedClubDetail club={club} onEdit={() => {}} />);

    fireEvent.click(screen.getByText(/delete/i));
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('conditional render: empty description and empty timetables', () => {
    const clubEmpty: Club = {
      ...club,
      id: '0',
      name: '',
      description: null,
      timetables: [],
    };
    render(
      <ApprovedClubDetail
        club={clubEmpty}
        onEdit={() => {}}
        onDelete={undefined}
      />
    );
    const dashElements = screen.getAllByText(/-/);
    expect(dashElements.length).toBeGreaterThan(0);
  });

  it('renders detail display', () => {
    render(<ApprovedClubDetail club={club} onEdit={() => {}} />);
    expect(screen.getByText('goal')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('101')).toBeInTheDocument();
    expect(screen.getByText(/5 - 10/)).toBeInTheDocument();
    expect(screen.getByText(/approved/i)).toBeInTheDocument();
  });
});
