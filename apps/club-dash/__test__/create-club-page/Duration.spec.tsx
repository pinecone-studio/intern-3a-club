import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Duration } from '../../app/createClub/_components';

describe('Duration Component', () => {
  const mockSetDuration = jest.fn();

  beforeEach(() => {
    mockSetDuration.mockClear();
  });

  it('renders with the correct label and default placeholder', () => {
    render(<Duration clubDuration="1" setClubDuration={mockSetDuration} />);

    expect(screen.getByText(/Үргэлжлэх хугацаа/i)).toBeInTheDocument();
    expect(screen.getByText('1 цаг')).toBeInTheDocument();
  });

  it('opens and displays all duration options when clicked', async () => {
    render(<Duration clubDuration="1" setClubDuration={mockSetDuration} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('1:00 цаг')).toBeInTheDocument();
    expect(screen.getByText('1:30 цаг')).toBeInTheDocument();
    expect(screen.getByText('2:00 цаг')).toBeInTheDocument();
  });

  it('updates the displayed value when an option is selected', async () => {
    render(<Duration clubDuration="1" setClubDuration={mockSetDuration} />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('1:30 цаг');
    fireEvent.click(option);

    expect(mockSetDuration).toHaveBeenCalled();
  });
});
