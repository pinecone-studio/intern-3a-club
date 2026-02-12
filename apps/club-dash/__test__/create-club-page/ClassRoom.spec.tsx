import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClassRoom } from '../../app/createClub/_components';

describe('ClassRoom Component', () => {
  it('renders the select trigger with the default placeholder', () => {
    render(<ClassRoom />);

    expect(screen.getByText(/Орох Анги/i)).toBeInTheDocument();
    expect(screen.getByText('301')).toBeInTheDocument();
  });

  it('opens the select and allows choosing a different room', async () => {
    render(<ClassRoom />);

    const trigger = screen.getByRole('combobox');

    fireEvent.click(trigger);

    const option = await screen.findByText('302');

    fireEvent.click(option);

    expect(screen.getByText('302')).toBeInTheDocument();
  });

  it('contains all required classroom options', () => {
    render(<ClassRoom />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const rooms = ['301', '302', '303', '304', '305'];
    rooms.forEach((room) => {
      expect(screen.getAllByText(room).length).toBeGreaterThan(0);
    });
  });
});
