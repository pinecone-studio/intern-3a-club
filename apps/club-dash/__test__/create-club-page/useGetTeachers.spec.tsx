import { renderHook } from '@testing-library/react';
import { useQuery } from '@apollo/client/react';
import {
  useGetTeachers,
  GET_ALL_TEACHERS,
} from '../../app/_hooks/use-get-teachers';

jest.mock('@apollo/client/react', () => ({
  useQuery: jest.fn(),
}));

const mockUseQuery = useQuery as unknown as jest.Mock;

describe('useGetTeachers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns loading state', () => {
    mockUseQuery.mockReturnValue({
      loading: true,
      error: undefined,
      data: undefined,
    });

    const { result } = renderHook(() => useGetTeachers());

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

    const { result } = renderHook(() => useGetTeachers());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toBeUndefined();
  });

  it('returns data state', () => {
    const mockData = {
      getAllTeachers: [
        {
          id: '1',
          firstName: 'Erdenetsogt',
          lastName: 'Bold',
          profilePicture: null,
        },
        {
          id: '2',
          firstName: 'Narantsatsralt',
          lastName: 'Gantulga',
          profilePicture: null,
        },
      ],
    };
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: mockData,
    });

    const { result } = renderHook(() => useGetTeachers());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toEqual(mockData);
    expect(result.current.data?.getAllTeachers).toHaveLength(2);
  });

  it('calls useQuery with GET_ALL_TEACHERS', () => {
    mockUseQuery.mockReturnValue({
      loading: false,
      error: undefined,
      data: undefined,
    });

    renderHook(() => useGetTeachers());

    expect(mockUseQuery).toHaveBeenCalledWith(GET_ALL_TEACHERS);
  });
});
