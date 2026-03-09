import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../../app/page';

const mockSyncUser = jest.fn();

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@apollo/client/react', () => ({
  useMutation: jest.fn(() => [mockSyncUser, { error: null }]),
}));

jest.mock('../../components/create-club/CreateClubCenter', () => ({
  CreateClubCenter: () => <div data-testid="create-club-center">CreateClubCenter</div>,
}));

const useAuth = jest.requireMock('@clerk/nextjs').useAuth;

describe('Home (app/page)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useAuth.mockReturnValue({
      isLoaded: true,
      userId: 'user-1',
      getToken: jest.fn().mockResolvedValue('token-1'),
    });
  });

  it('renders CreateClubCenter when loaded and no error', async () => {
    mockSyncUser.mockResolvedValue({
      data: { syncUser: { __typename: 'Teacher', id: '1', authUserId: 'a', azureEmail: 'e', firstName: 'F', lastName: 'L' } },
    });

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalled();
    });
    expect(screen.getByTestId('create-club-center')).toBeInTheDocument();
  });

  it('shows error view when mutation returns error and not synced', async () => {
    const useMutation = jest.requireMock('@apollo/client/react').useMutation;
    useMutation.mockReturnValue([
      mockSyncUser,
      { error: { message: 'Холболт амжилтгүй' } },
    ]);
    mockSyncUser.mockResolvedValue({ data: null });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Холболт амжилтгүй' })).toBeInTheDocument();
    });
  });

  it('does not sync when isLoaded is false', () => {
    useAuth.mockReturnValue({ isLoaded: false, userId: null, getToken: jest.fn() });
    render(<Home />);
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  it('does not sync when userId is null', () => {
    useAuth.mockReturnValue({ isLoaded: true, userId: null, getToken: jest.fn() });
    render(<Home />);
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  it('calls syncUser with token in headers', async () => {
    const getToken = jest.fn().mockResolvedValue('bearer-token');
    useAuth.mockReturnValue({ isLoaded: true, userId: 'u1', getToken });
    mockSyncUser.mockResolvedValue({ data: { syncUser: { __typename: 'Student', id: '1', authUserId: 'a', azureEmail: 'e', firstName: 'F', lastName: 'L', classId: 'c1' } } });

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalledWith({
        context: {
          fetchOptions: { signal: expect.any(AbortSignal) },
          headers: { authorization: 'Bearer bearer-token' },
        },
      });
    });
  });

  it('does not log when error is AbortError', async () => {
    const abortErr = new Error('aborted');
    (abortErr as Error & { name: string }).name = 'AbortError';
    mockSyncUser.mockRejectedValue(abortErr);
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(consoleSpy).not.toHaveBeenCalled();
    });
    consoleSpy.mockRestore();
  });

  it('logs when error is not AbortError', async () => {
    mockSyncUser.mockRejectedValue(new Error('network failed'));
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Синхрончлолын алдаа:', expect.any(Error));
    });
    consoleSpy.mockRestore();
  });

  it('does not sync when getToken returns null', async () => {
    useAuth.mockReturnValue({ isLoaded: true, userId: 'u1', getToken: jest.fn().mockResolvedValue(null) });
    render(<Home />);
    await waitFor(() => {
      expect(mockSyncUser).not.toHaveBeenCalled();
    });
  });
});
