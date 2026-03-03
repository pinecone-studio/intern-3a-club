import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ViewRender } from '../../app/_components/main/ViewRender';
import { Providers } from '../../libs/apollo/Providers';
import Dashboard from '../../app/page';

jest.mock('../../app/_components/teacher/main/AdminClubView', () => ({
  AdminClubsView: () => <div>Admin Clubs View</div>,
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

jest.mock('@clerk/nextjs', () => {
  return {
    useUser: () => ({ user: { id: 'user_1' } }),
    useAuth: () => ({
      getToken: jest.fn().mockResolvedValue('test-token'),
    }),
    SignedIn: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    SignedOut: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    SignInButton: ({ children }: { children: React.ReactNode }) =>
      React.createElement('button', null, children),
    SignUpButton: ({ children }: { children: React.ReactNode }) =>
      React.createElement('button', null, children),
    UserButton: () => React.createElement('div', null, 'UserButton'),
  };
});

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

describe('ViewRender branches', () => {
  it('renders Admin Clubs view', () => {
    render(<ViewRender activeView="Admin Clubs" />);
    expect(screen.getByText('Admin Clubs View')).toBeInTheDocument();
  });

  it('renders Academic view for Academic', () => {
    render(<ViewRender activeView="Academic" />);
    expect(screen.getByText('Академик Сургалт')).toBeInTheDocument();
  });

  it('renders Academic view for Courses', () => {
    render(<ViewRender activeView="Courses" />);
    expect(screen.getByText('Академик Сургалт')).toBeInTheDocument();
  });

  it('renders Career Resources view', () => {
    render(<ViewRender activeView="Resources" />);
    expect(screen.getByText('Карьер Хөгжил')).toBeInTheDocument();
  });

  it('renders Active Challenges view', () => {
    render(<ViewRender activeView="Active" />);
    expect(screen.getByText('ACTIVE CHALLENGES')).toBeInTheDocument();
  });
});

// describe('Page', () => {
//   it('navigates between views via sidebar', () => {
//     render(<Page />);

//     fireEvent.click(screen.getByText(/admin clubs/i));
//     fireEvent.click(screen.getByText(/academic/i));
//     fireEvent.click(screen.getByText(/courses/i));
//     fireEvent.click(screen.getByText(/grades/i));
//     fireEvent.click(screen.getByText(/career development/i));
//     fireEvent.click(screen.getByText(/resources/i));
//     fireEvent.click(screen.getByText(/challenge/i));
//     fireEvent.click(screen.getByText(/active/i));
//     fireEvent.click(screen.getAllByText(/home/i)[0]);
//   });
// });

describe('Dashboard page', () => {
  it('navigates between views via sidebar', () => {
    render(<Dashboard />);

    fireEvent.click(screen.getByText(/admin clubs/i));
    fireEvent.click(screen.getByText(/academic/i));
    fireEvent.click(screen.getByText(/courses/i));
    fireEvent.click(screen.getByText(/career development/i));
    fireEvent.click(screen.getByText(/resources/i));
    fireEvent.click(screen.getByText(/challenge/i));
    fireEvent.click(screen.getByText(/active/i));

    expect(screen.getByText(/admin clubs/i)).toBeInTheDocument();
  });
});
