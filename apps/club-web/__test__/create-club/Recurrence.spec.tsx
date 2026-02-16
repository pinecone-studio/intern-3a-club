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

  it('triggers useEffect for recurrence updates (LogisticsSection Line 58)', async () => {
    render(<CreateClubCenter />);
    const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);

    fireEvent.change(repeatSelect, { target: { value: 'weekly' } });
    await waitFor(() =>
      expect(screen.getByText('3 өдөр сонгосон')).toBeInTheDocument()
    );

    fireEvent.click(screen.getByTestId('next-month-btn'));
    await waitFor(() =>
      expect(screen.getByText('4 өдөр сонгосон')).toBeInTheDocument()
    );
  });

  it('handles reset and switching to none', async () => {
    render(<CreateClubCenter />);
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

    const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);

    fireEvent.change(repeatSelect, { target: { value: 'weekly' } });

    fireEvent.change(repeatSelect, { target: { value: 'none' } });

    expect(repeatSelect).toHaveValue('none');
  });
});
