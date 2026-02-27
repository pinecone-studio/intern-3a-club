import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/client/react';
import { useGetClubs, GET_ALL_CLUBS } from '../../app/_hooks/use-get-clubs';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('useGetClubs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns loading state', () => {
    mockUseQuery.mockReturnValue({
      loading: true,
      error: undefined,
      data: undefined,
    });

    const { result } = renderHook(() => useGetClubs());

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toBeUndefined();
  });

  it('returns error state', () => {
    const mockError = new Error('Network error');
    mockUseQuery.mockReturnValue({
      loading: false,
      error: mockError,
      data: undefined,
    });

    const { result } = renderHook(() => useGetClubs());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toBeUndefined();
  });

  it('returns data with clubs', () => {
    const mockData = {
      getAllClubs: [
        {
          id: '1',
          name: 'Coding Club',
          description: 'Learn to code',
          creatorId: 'user1',
          teacherId: 'teacher1',
          type: 'mentor',
          status: 'active',
          preferredTeachers: [],
          minMember: 5,
          maxMember: 20,
          timetables: [
            {
              id: 't1',
              clubId: '1',
              date: '2026-03-01',
              room: '301',
              clubStartTime: '13:00',
              duration: 60,
            },
          ],
        },
      ],
    };

    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: mockData,
    });

    const { result } = renderHook(() => useGetClubs());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toEqual(mockData);
    expect(result.current.data?.getAllClubs).toHaveLength(1);
    expect(result.current.data?.getAllClubs[0].name).toBe('Coding Club');
  });

  it('returns empty clubs array', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: { getAllClubs: [] },
    });

    const { result } = renderHook(() => useGetClubs());

    expect(result.current.data?.getAllClubs).toHaveLength(0);
  });

  it('calls useQuery with GET_ALL_CLUBS', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: undefined,
    });

    renderHook(() => useGetClubs());

    expect(mockUseQuery).toHaveBeenCalledWith(GET_ALL_CLUBS);
  });
});
