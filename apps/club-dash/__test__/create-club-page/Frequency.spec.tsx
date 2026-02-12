import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';

describe('Frequency Component', () => {
  it('opens the dropdown and displays all frequency options', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');

    fireEvent.pointerDown(trigger, { button: 0 });

    const weeklyOption = await screen.findByText(/Долоо хоног бүр/i);
    const monthlyOption = await screen.findByText(/Сар бүр/i);

    expect(weeklyOption).toBeInTheDocument();
    expect(monthlyOption).toBeInTheDocument();
  });
});
