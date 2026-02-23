import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import CreateClub from '../../app/createClub/page';

const mockHandlers = {
  handleName: jest.fn(),
  handleDesc: jest.fn(),
  handleMax: jest.fn(),
  handleMin: jest.fn(),
};

jest.mock('../../app/_hooks/use-create-club', () => ({
  useCreateClubMutation: () => ({
    handleSubmit: jest.fn((e) => e.preventDefault()),
    loading: false,
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
      clubMaxStudent: '',
      clubMinStudent: '',
    },
    setters: {},
    handlers: mockHandlers,
  }),
}));

describe('CreateClub Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders and opens dialog without Apollo crashing', async () => {
    render(<CreateClub />);

    const trigger = screen.getByText(/Клуб нээх/i);
    fireEvent.click(trigger);

    const title = await screen.findByRole('heading', {
      name: /Шинэ клуб нээх/i,
    });
    expect(title).toBeInTheDocument();
  });

  it('calls handleName when typing in the name field', async () => {
    render(<CreateClub />);
    fireEvent.click(screen.getByText(/Клуб нээх/i));

    const nameInput = await screen.findByLabelText(/Клубын нэр/i);
    fireEvent.change(nameInput, { target: { value: 'Coding Club' } });

    expect(mockHandlers.handleName).toHaveBeenCalled();
  });
});
