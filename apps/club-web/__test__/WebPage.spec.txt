import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/page'; // Замаа өөрийнхөөрөө тохируулаарай
import { useMutation } from '@apollo/client/react';
import { useAuth } from '@clerk/nextjs';
import '@testing-library/jest-dom';

// 1. Глобал Fetch Mock (ReferenceError: fetch-ээс сэргийлнэ)
global.fetch = jest.fn();

// 2. Модулиудыг Mock хийх
jest.mock('@apollo/client/react', () => ({
  ...jest.requireActual('@apollo/client/react'),
  useMutation: jest.fn(),
}));

jest.mock('@clerk/nextjs', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../components/create-club/CreateClubCenter', () => ({
  CreateClubCenter: () => (
    <div data-testid="club-ui">Create Club Center UI</div>
  ),
}));

// TypeScript-д зориулж функцуудыг Mock төрөлд шилжүүлэх
const mockedUseMutation = jest.mocked(useMutation);
const mockedUseAuth = jest.mocked(useAuth);

describe('Home Page Full Coverage Tests', () => {
  const mockSyncUser = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    // Console.error-ийг цэвэр байлгах
    jest.spyOn(console, 'error').mockImplementation(() => {});

    // Default Success State
    mockedUseAuth.mockReturnValue({
      isLoaded: true,
      userId: 'user_123',
    } as any);

    mockedUseMutation.mockReturnValue([
      mockSyncUser,
      { data: null, loading: false, error: undefined } as any,
    ]);
  });

  // TEST 1: Амжилттай синхрончлол (Happy Path)
  it('should sync user successfully and show main UI', async () => {
    mockSyncUser.mockResolvedValue({
      data: {
        syncUser: {
          id: '1',
          firstName: 'Test',
          lastName: 'User',
          __typename: 'Teacher',
        },
      },
    });

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalled();
      expect(screen.getByTestId('club-ui')).toBeInTheDocument();
    });
  });

  // TEST 2: Error View Coverage (Мөр 88-95)
  it('should show error view when mutation fails and not synced', async () => {
    const gqlError = { message: 'GraphQL Connection Failed' };

    mockedUseMutation.mockReturnValue([
      mockSyncUser,
      { error: gqlError, loading: false } as any,
    ]);

    render(<Home />);

    expect(screen.getByText('Холболт амжилтгүй')).toBeInTheDocument();
    expect(screen.getByText(gqlError.message)).toBeInTheDocument();
  });

  // TEST 3: performSync Catch Block Coverage (Мөр 72)
  it('should log error when syncUser promise rejects', async () => {
    const networkError = new Error('Network Failure');
    mockSyncUser.mockRejectedValue(networkError);

    render(<Home />);

    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith(
        'Синхрончлолын алдаа:',
        networkError
      );
    });
  });

  // TEST 4: AbortError handling (Branch coverage)
  it('should not log error when request is aborted', async () => {
    const abortError = new Error('The operation was aborted');
    abortError.name = 'AbortError';
    mockSyncUser.mockRejectedValue(abortError);

    render(<Home />);

    await waitFor(() => {
      expect(mockSyncUser).toHaveBeenCalled();
      expect(console.error).not.toHaveBeenCalled();
    });
  });

  // TEST 5: isLoaded: false үед юу ч хийхгүй байх (Branch coverage)
  it('should not perform sync if clerk is not loaded', () => {
    mockedUseAuth.mockReturnValue({
      isLoaded: false,
      userId: null,
    } as any);

    render(<Home />);
    expect(mockSyncUser).not.toHaveBeenCalled();
  });

  // TEST 6: userId байхгүй үед юу ч хийхгүй байх
  it('should not perform sync if userId is missing', () => {
    mockedUseAuth.mockReturnValue({
      isLoaded: true,
      userId: null,
    } as any);

    render(<Home />);
    expect(mockSyncUser).not.toHaveBeenCalled();
  });
});
