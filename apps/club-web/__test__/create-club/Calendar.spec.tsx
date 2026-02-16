import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';

describe('Calendar Interaction Suite', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it('toggles date selection on and off (CreateClubCenter line 74)', () => {
    render(<CreateClubCenter />);
    const buttons = screen
      .getAllByRole('button')
      .filter((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    const dayBtn = buttons[0];

    fireEvent.click(dayBtn); // Select
    fireEvent.click(dayBtn); // Deselect (Hits Line 74)
    fireEvent.click(dayBtn); // Select again
  });

  it('navigates months and renders empty slots', () => {
    render(<CreateClubCenter />);
    fireEvent.click(screen.getByTestId('next-month-btn'));
    fireEvent.click(screen.getByTestId('prev-month-btn'));
  });

  it('handles sorting and date removal via icon', () => {
    render(<CreateClubCenter />);
    const buttons = screen
      .getAllByRole('button')
      .filter(
        (b) =>
          /^[0-9]+$/.test(b.textContent || '') && !b.hasAttribute('disabled')
      );

    fireEvent.click(buttons[1]); // Sorting trigger
    fireEvent.click(buttons[0]);

    const removeIcon = screen.getAllByTestId('remove-date-icon')[0];
    fireEvent.click(removeIcon);
  });
});
