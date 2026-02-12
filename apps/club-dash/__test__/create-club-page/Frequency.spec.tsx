// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { Frequency } from '../../app/createClub/_components';

// describe('Frequency Component', () => {
//   it('opens the dropdown and displays all frequency options', async () => {
//     render(<Frequency />);

//     const trigger = screen.getByRole('combobox');

//     fireEvent.pointerDown(trigger, { button: 0 });

//     const weeklyOption = await screen.findByText(/Долоо хоног бүр/i);
//     const monthlyOption = await screen.findByText(/Сар бүр/i);

//     expect(weeklyOption).toBeInTheDocument();
//     expect(monthlyOption).toBeInTheDocument();
//   });
// });

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
  });

  it('opens the dropdown and displays available frequency options', async () => {
    render(<Frequency />);

    const trigger = screen.getByRole('combobox');
    fireEvent.click(trigger);

    const listbox = await screen.findByRole('listbox');

    const selectedDays = within(listbox).getByText(/Зөвхөн сонгосон өдрүүдэд/i);
    const weeklyOption = within(listbox).getByText(/Долоо хоног бүр/i);
    const biWeeklyOption = within(listbox).getByText(/2 долоо хоног тутам/i);
    const monthlyOption = within(listbox).getByText(/Сар бүр/i);

    expect(selectedDays).toBeInTheDocument();
    expect(weeklyOption).toBeInTheDocument();
    expect(biWeeklyOption).toBeInTheDocument();
    expect(monthlyOption).toBeInTheDocument();
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
    });
  });
});
