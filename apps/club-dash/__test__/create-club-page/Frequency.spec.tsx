import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '@/app/createClub/_components';

describe('Frequency Component', () => {
  it('renders with the correct label and default placeholder', () => {
    render(<Frequency />);

    expect(screen.getByText(/Давтамж/i)).toBeInTheDocument();
    expect(screen.getByText('Зөвхөн сонгосон өдрүүдэд')).toBeInTheDocument();
  });

  it('opens the dropdown and displays all frequency options', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(await screen.findByText('Долоо хоног бүр')).toBeInTheDocument();
    expect(screen.getByText('2 долоо хоног тутам')).toBeInTheDocument();
    expect(screen.getByText('Сар бүр')).toBeInTheDocument();
  });

  it('updates the selection when a new frequency is picked', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const option = await screen.findByText('Сар бүр');
    fireEvent.click(option);

    expect(screen.getByText('Сар бүр')).toBeInTheDocument();
  });
});
