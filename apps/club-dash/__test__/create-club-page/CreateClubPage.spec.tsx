import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CreateClub from '../../app/createClub/page';

const mockSubmit = jest.fn((e) => e.preventDefault());
let mockLoading = false;

const mockHandlers = {
  handleName: jest.fn(),
  handleDesc: jest.fn(),
  handleMax: jest.fn(),
};

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

jest.mock('../../app/_hooks/use-get-teachers', () => ({
  useGetTeachers: () => ({
    loading: false,
    error: undefined,
    data: {
      getAllTeachers: [
        { id: '1', firstName: 'Erdenetsogt', lastName: '' },
        { id: '2', firstName: 'Narantsatsralt', lastName: '' },
      ],
    },
  }),
}));

jest.mock('../../app/_hooks/use-get-clubs', () => ({
  useGetClubs: () => ({
    loading: false,
    error: undefined,
    data: { getAllClubs: [] },
  }),
}));

jest.mock('../../app/_hooks/use-create-club', () => ({
  useCreateClubMutation: () => ({
    handleSubmit: mockSubmit,
    loading: mockLoading,
    error: null,
  }),
}));

jest.mock('../../app/_hooks/use-createclub-states', () => ({
  useCreateClubState: () => ({
    state: {
      clubName: '',
      teacherId: '',
      clubDesc: '',
      clubStartDate: [],
      selectedFreqId: '1',
      clubTerm: '1',
      clubClassRoom: '301',
      clubStartTime: '13:00',
      clubDuration: '1:00',
      clubMaxStudent: '20',
      clubMinStudent: '5',
      clubFrequency: 'Зөвхөн сонгосон өдрүүдэд',
      scheduleChange: {},
    },
    setters: {
      setTeacherId: jest.fn(),
      setClubStartDate: jest.fn(),
      setSelectedFreqId: jest.fn(),
      setClubTerm: jest.fn(),
      setClubClassRoom: jest.fn(),
      setClubStartTime: jest.fn(),
      setClubDuration: jest.fn(),
      setClubFrequency: jest.fn(),
    },
    handlers: mockHandlers,
  }),
}));

describe('CreateClub Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLoading = false;
  });

  it('renders and opens dialog', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    expect(
      await screen.findByRole('heading', { name: /Шинэ клуб нээх/i })
    ).toBeInTheDocument();
  });

  it('calls handleSubmit when form is submitted', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const submitBtn = screen.getByRole('button', { name: /Create Club/i });
    fireEvent.submit(submitBtn);

    expect(mockSubmit).toHaveBeenCalled();
  });

  it('shows loading state on the submit button', async () => {
    mockLoading = true;
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const loadingBtn = await screen.findByRole('button', {
      name: /Creating.../i,
    });
    expect(loadingBtn).toBeInTheDocument();
    expect(loadingBtn).toBeDisabled();
  });

  it('calls handlers when inputs change', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    fireEvent.change(screen.getByLabelText(/Клубын нэр/i), {
      target: { value: 'New Club' },
    });
    fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), {
      target: { value: 'New Desc' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Max/i), {
      target: { value: '30' },
    });

    expect(mockHandlers.handleName).toHaveBeenCalled();
    expect(mockHandlers.handleDesc).toHaveBeenCalled();
    expect(mockHandlers.handleMax).toHaveBeenCalled();
  });
});
