import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartTime } from '@/app/createClub/_components';

describe('StartTime Component', () => {
  it('renders the correct label and initial placeholder value', () => {
    render(<StartTime />);

    expect(screen.getByText(/Эхлэх цаг/i)).toBeInTheDocument();

    expect(screen.getByText('13:00')).toBeInTheDocument();
  });

  it('opens the dropdown and shows all time slots', async () => {
    render(<StartTime />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('14:00')).toBeInTheDocument();
    expect(screen.getByText('15:00')).toBeInTheDocument();
    expect(screen.getByText('16:00')).toBeInTheDocument();
    expect(screen.getByText('17:00')).toBeInTheDocument();
  });

  it('updates the trigger text when a new time is selected', async () => {
    render(<StartTime />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('15:00');
    fireEvent.click(option);

    expect(screen.getByText('15:00')).toBeInTheDocument();
  });
});
