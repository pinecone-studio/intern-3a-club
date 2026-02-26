import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Page from '../../app/page';
import { ViewRender } from '../../app/_components/main/ViewRender';
import { Providers } from '../../libs/apollo/providers';

jest.mock('@clerk/nextjs', () => ({
  useAuth: () => ({ getToken: jest.fn().mockResolvedValue('mock-token') }),
  useUser: () => ({ user: { firstName: 'Test' } }),
  SignedIn: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  SignedOut: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  SignInButton: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  SignUpButton: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  UserButton: () => <div>UserButton</div>,
  ClerkProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock('../../app/_components/teacher/main/use-admin-clubs-data', () => ({
  useAdminClubsData: () => ({
    approved: [],
    setApproved: jest.fn(),
    pending: [],
    setPending: jest.fn(),
    loadingApproved: false,
    loadingPending: false,
    errorApproved: null,
    errorPending: null,
  }),
  getIsLoading: () => false,
  getIsError: () => false,
  getErrorMessage: () => '',
}));

jest.mock('../../app/createClub/page', () => ({
  __esModule: true,
  default: () => <div>CreateClub</div>,
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

describe('ViewRender', () => {
  it('returns null for unknown activeView', () => {
    const { container } = render(<ViewRender activeView="UNKNOWN" />);
    expect(container.firstChild).toBeNull();
  });
});

describe('Providers', () => {
  it('renders children with Apollo context', () => {
    render(
      <Providers>
        <div>child</div>
      </Providers>
    );

    expect(screen.getByText('child')).toBeInTheDocument();
  });
});

describe('Page', () => {
  it('navigates between views via sidebar', () => {
    render(<Page />);

    fireEvent.click(screen.getByText(/admin clubs/i));
    fireEvent.click(screen.getByText(/academic/i));
    fireEvent.click(screen.getByText(/courses/i));
    fireEvent.click(screen.getByText(/grades/i));
    fireEvent.click(screen.getByText(/career development/i));
    fireEvent.click(screen.getByText(/resources/i));
    fireEvent.click(screen.getByText(/challenge/i));
    fireEvent.click(screen.getByText(/active/i));
    fireEvent.click(screen.getAllByText(/home/i)[0]);
  });
});
