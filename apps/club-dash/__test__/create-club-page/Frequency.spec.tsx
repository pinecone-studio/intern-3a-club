import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Frequency } from '../../app/createClub/_components';

describe('Frequency Component', () => {
  it('renders the trigger with the correct default text', () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    expect(trigger).toHaveTextContent(/Зөвхөн сонгосон өдрүүдэд/i);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the dropdown and displays available frequency options', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    const listbox = await screen.findByRole('listbox');

    expect(
      within(listbox).getByText(/Зөвхөн сонгосон өдрүүдэд/i)
    ).toBeInTheDocument();
    expect(within(listbox).getByText(/Долоо хоног бүр/i)).toBeInTheDocument();
    expect(
      within(listbox).getByText(/2 долоо хоног тутам/i)
    ).toBeInTheDocument();
    expect(within(listbox).getByText(/Сар бүр/i)).toBeInTheDocument();
  });

  it('selects an option and updates the trigger display', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const listbox = await screen.findByRole('listbox');
    const monthlyOption = within(listbox).getByText(/Сар бүр/i);
    fireEvent.click(monthlyOption);

    await waitFor(() => {
      expect(trigger).toHaveTextContent(/Сар бүр/i);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('closes the dropdown without selecting an option', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(trigger, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('re-selecting the same option keeps it selected', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const listbox = await screen.findByRole('listbox');
    const selectedDaysOption = within(listbox).getByText(
      /Зөвхөн сонгосон өдрүүдэд/i
    );
    fireEvent.click(selectedDaysOption);

    await waitFor(() => {
      expect(trigger).toHaveTextContent(/Зөвхөн сонгосон өдрүүдэд/i);
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
