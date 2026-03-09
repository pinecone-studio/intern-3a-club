import { render, screen, act } from '@testing-library/react';
import Home from '../app/page';
import { useAuth } from '@clerk/nextjs';
import { useMutation } from '@apollo/client/react';

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@apollo/client/react', () => ({
  useMutation: jest.fn(),
}));

jest.mock('../components/create-club/CreateClubCenter', () => ({
  CreateClubCenter: () => (
    <div data-testid="create-club-center">CreateClubCenter</div>
  ),
}));

describe('Home page', () => {
  const mockSyncUser = jest.fn();
  const mockGetToken = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAuth as unknown as jest.Mock).mockReturnValue({
      isLoaded: true,
      userId: 'user-123',
      getToken: mockGetToken,
    });

    (useMutation as unknown as jest.Mock).mockReturnValue([
      mockSyncUser,
      { error: null },
    ]);
  });

  it('renders CreateClubCenter correctly', () => {
    render(<Home />);
    expect(screen.getByTestId('create-club-center')).toBeDefined();
  });

  it('does not sync if isLoaded is false', () => {
    (useAuth as unknown as jest.Mock).mockReturnValue({
      isLoaded: false,
      userId: 'user-123',
      getToken: mockGetToken,
    });
    render(<Home />);
    expect(mockGetToken).not.toHaveBeenCalled();
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  it('does not sync if userId is absent', () => {
    (useAuth as unknown as jest.Mock).mockReturnValue({
      isLoaded: true,
      userId: null,
      getToken: mockGetToken,
    });
    render(<Home />);
    expect(mockGetToken).not.toHaveBeenCalled();
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  it('does not call syncUser if token is null', async () => {
    mockGetToken.mockResolvedValue(null);
    await act(async () => {
      render(<Home />);
    });
    expect(mockGetToken).toHaveBeenCalled();
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  it('calls syncUser with token on mount successfully', async () => {
    mockGetToken.mockResolvedValue('fake-token');
    mockSyncUser.mockResolvedValue({
      data: {
        syncUser: {
          __typename: 'Teacher',
          id: 'teacher-1',
          authUserId: 'user-123',
          azureEmail: 'teacher@abc.com',
          firstName: 'Teacher',
          lastName: 'One',
        },
      },
    });

    await act(async () => {
      render(<Home />);
    });

    expect(mockGetToken).toHaveBeenCalled();
    expect(mockSyncUser).toHaveBeenCalledWith({
      context: {
        fetchOptions: { signal: expect.any(Object) },
        headers: { authorization: 'Bearer fake-token' },
      },
    });
  });

  // <-- Шинэ тест: handleSyncResult доторх falsy branch‑ийг cover хийнэ
  it('ignores syncUser result when data is null', async () => {
    mockGetToken.mockResolvedValue('fake-token');
    mockSyncUser.mockResolvedValue({ data: null });

    await act(async () => {
      render(<Home />);
    });

    // Ямар нэг алдаа гаргалгүй, default view хэвээрээ байгааг л шалгана
    expect(screen.getByTestId('create-club-center')).toBeDefined();
  });

  it('handles sync error without aborting (logs error)', async () => {
    mockGetToken.mockResolvedValue('fake-token');
    mockSyncUser.mockRejectedValue(new Error('Some network failure'));

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await act(async () => {
      render(<Home />);
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Синхрончлолын алдаа:',
      expect.any(Error)
    );
    expect(screen.getByTestId('create-club-center')).toBeDefined();

    consoleErrorSpy.mockRestore();
  });

  it('handles abort error silently during syncUser', async () => {
    mockGetToken.mockResolvedValue('fake-token');
    const abortError = new Error('The user aborted a request.');
    abortError.name = 'AbortError';
    mockSyncUser.mockRejectedValue(abortError);

    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    await act(async () => {
      render(<Home />);
    });

    expect(consoleErrorSpy).not.toHaveBeenCalled();
    expect(screen.getByTestId('create-club-center')).toBeDefined();

    consoleErrorSpy.mockRestore();
  });

  it('renders error view if mutation returns error', () => {
    (useMutation as unknown as jest.Mock).mockReturnValue([
      mockSyncUser,
      { error: { message: 'Failed to find user' } },
    ]);

    render(<Home />);

    expect(screen.getByText('Холболт амжилтгүй')).toBeDefined();
    expect(screen.getByText('Failed to find user')).toBeDefined();
    expect(screen.queryByTestId('create-club-center')).toBeNull();
  });
});
