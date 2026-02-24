import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CreateClub from '../../app/createClub/page';

// 1. Setup shared mock variables
const mockSubmit = jest.fn((e) => e.preventDefault());
let mockLoading = false;

const mockHandlers = {
  handleName: jest.fn(),
  handleDesc: jest.fn(),
  handleMax: jest.fn(),
  handleMin: jest.fn(),
};

// 2. Mock hooks with dynamic return values
jest.mock('../../app/_hooks/use-create-club', () => ({
  useCreateClubMutation: () => ({
    handleSubmit: mockSubmit,
    loading: mockLoading, // Uses the variable defined above
    error: null,
  }),
}));

jest.mock('../../app/_hooks/use-createclub-states', () => ({
  useCreateClubState: () => ({
    state: {
      clubName: '',
      teacherName: '',
      clubDesc: '',
      clubStartDate: new Date(),
      clubFrequency: '',
      selectedDays: [],
      selectedFreqId: '',
      clubClassRoom: '',
      clubStartTime: '',
      clubDuration: '',
      clubMaxStudent: '20',
      clubMinStudent: '5',
    },
    setters: {
      setTeacherName: jest.fn(),
      setClubStartDate: jest.fn(),
      setClubFrequency: jest.fn(),
      setSelectedDays: jest.fn(),
      setSelectedFreqId: jest.fn(),
      setClubClassRoom: jest.fn(),
      setClubStartTime: jest.fn(),
      setClubDuration: jest.fn(),
    },
    handlers: mockHandlers,
  }),
}));

describe('CreateClub Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLoading = false; // Reset loading state
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

  // --- THIS TEST FIXES THE 50% BRANCH COVERAGE ---
  it('shows loading state on the submit button', async () => {
    mockLoading = true; // Set loading to true for this test
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
    fireEvent.change(screen.getByLabelText(/Max/i), {
      target: { value: '30' },
    });
    fireEvent.change(screen.getByLabelText(/Min/i), {
      target: { value: '10' },
    });

    expect(mockHandlers.handleName).toHaveBeenCalled();
    expect(mockHandlers.handleDesc).toHaveBeenCalled();
    expect(mockHandlers.handleMax).toHaveBeenCalled();
    expect(mockHandlers.handleMin).toHaveBeenCalled();
  });
});
