import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';

describe('Recurrence & Logistics Logic', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    cleanup();
  });

  const goToStep2 = () => {
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'bat', name: 'teacher' },
    });
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
  };

  it('triggers useEffect for recurrence updates (LogisticsSection Line 58)', async () => {
    render(<CreateClubCenter />);
    goToStep2();

    const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);

    fireEvent.change(repeatSelect, { target: { value: 'weekly' } });

    // In current logic, if no dates selected, it uses today.
    // 2024-04-15 is Monday.
    // 4 Mondays in April: 15, 22, 29. Wait, 1, 8 are past.
    // So 15, 22, 29 = 3 days.
    await waitFor(() =>
      expect(screen.getByText('3 өдөр сонгосон')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByTestId('next-month-btn'));
    // May 2024 Mondays: 6, 13, 20, 27. (4 days)
    await waitFor(() =>
      expect(screen.getByText('4 өдөр сонгосон')).toBeInTheDocument()
    );
  });

  it('handles reset and switching to none', async () => {
    render(<CreateClubCenter />);
    goToStep2();

    const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);

    fireEvent.change(repeatSelect, { target: { value: 'weekly' } });
    fireEvent.click(screen.getByTestId('reset-logistics-btn'));

    await waitFor(() => {
      expect(screen.getByText('0 өдөр сонгосон')).toBeInTheDocument();
      expect(repeatSelect).toHaveValue('none');
    });
  });

  it('covers none recurrence mode branch (LogisticsSection line 22)', () => {
    render(<CreateClubCenter />);
    goToStep2();

    const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);

    fireEvent.change(repeatSelect, { target: { value: 'weekly' } });
    fireEvent.change(repeatSelect, { target: { value: 'none' } });

    expect(repeatSelect).toHaveValue('none');
  });
});
