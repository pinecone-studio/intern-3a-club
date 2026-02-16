import {
  render,
  screen,
  fireEvent,
  // cleanup,
  // waitFor,
} from '@testing-library/react';
import JoinClubPage from '../app/JoinClub/page';
import React from 'react';
import * as mockDataModule from '../lib/mockdata';

jest.mock('../lib/mockdata', () => ({
  __esModule: true,
  clubs: [
    {
      id: 1,
      name: 'Test Club',
      status: 'Open',
      currentMembers: 10,
      description: 'D1',
      schedule: 'Mon',
      location: 'L1',
      image: '/t1.jpg',
      tags: ['T1'],
      members: [],
    },
    {
      id: 2,
      name: 'Second Club',
      status: 'Closed',
      currentMembers: 5,
      description: 'D2',
      schedule: 'Tue',
      location: 'L2',
      image: '/t2.jpg',
      tags: ['T2'],
      members: [],
    },
  ],
}));

jest.mock('../app/JoinClub/_components/ClubCard', () => ({
  ClubCard: ({
    onClick,
    club,
  }: {
    onClick: (_id: number) => void;
    club: { id: number; name: string };
  }) => (
    <div>
      <div onClick={() => onClick(club.id)} role="button">
        {club.name}
      </div>
      <button
        onClick={() => onClick(-9999)}
        data-testid="force-invalid-selection"
      >
        Force Invalid
      </button>
    </div>
  ),
}));

describe('JoinClubPage Full Coverage', () => {
  it('should cover line 11 (initial state) and club selection', () => {
    render(<JoinClubPage />);

    // Эхний клуб автоматаар сонгогдсон байх ёстой (Line 11 coverage)
    const firstClubTitle = screen.getAllByText(/Test Club/i);
    expect(firstClubTitle.length).toBeGreaterThan(0);

    // Клуб солих
    const clubCards = screen.getAllByRole('button');
    fireEvent.click(clubCards[1]);

    // Multiple elements error засах: Хэд хэдэн "Second Club" байгаа тул getAll ашиглах
    const selectedTitles = screen.getAllByText(/Second Club/i);
    expect(selectedTitles[0]).toBeInTheDocument();
  });

  it('should cover enroll and leave logic', async () => {
    render(<JoinClubPage />);

    // Бүртгүүлэх
    const enrollBtn = screen.getByRole('button', { name: /Одоо нэгдэх/i });
    fireEvent.click(enrollBtn);

    // Гарах
    const leaveBtn = await screen.findByRole('button', {
      name: /Клубээс гарах/i,
    });
    fireEvent.click(leaveBtn);

    expect(screen.getByText(/Одоо нэгдэх/i)).toBeInTheDocument();
  });

  it('should cover line 82 (EmptyState fallback)', () => {
    // mockData-г түр хугацаанд хоосон болгох
    const originalClubs = mockDataModule.clubs;
    Object.defineProperty(mockDataModule, 'clubs', {
      value: [],
      configurable: true,
    });

    render(<JoinClubPage />);
    // Line 82: selectedClub байхгүй үед EmptyState харагдах ёстой
    expect(screen.getByText(/Клуб сонгоно уу/i)).toBeInTheDocument();

    Object.defineProperty(mockDataModule, 'clubs', { value: originalClubs });
  });

  it('should cover line 82 (EmptyState fallback inside the main layout) properly', () => {
    // 1. Render page with valid data (mocked above)
    render(<JoinClubPage />);

    // 2. Click the special "Force Invalid" button injected by our ClubCard mock
    // This calls onClick(-9999), setting selectedId to -9999.
    const forceBtns = screen.getAllByTestId('force-invalid-selection');
    fireEvent.click(forceBtns[0]);

    // 3. Verify EmptyState is rendered
    expect(screen.getByText(/Клуб сонгоно уу/i)).toBeInTheDocument();
  });
});

// import Home from '../app/page';
// import '@testing-library/jest-dom';
// import { CreateClubCenter } from '../components/create-club/CreateClubCenter';
// import {
//   isWeeklyMatch,
//   isMonthlyMatch,
//   isBiweeklyMatch,
//   checkDateMatch,
//   generateDates,
// } from '../components/create-club/RecurrentUtils';

// afterEach(cleanup);

// describe('Club Web Page & Logic - ABSOLUTE 100% Coverage Suite', () => {
//   beforeEach(() => {
//     jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
//   });

//   afterEach(() => {
//     jest.runOnlyPendingTimers();
//     jest.useRealTimers();
//     cleanup();
//   });

//   // 1. Үндсэн хуудас рендер
//   it('renders home page', () => {
//     render(<Home />);
//     expect(screen.getByText('page')).toBeInTheDocument();
//   });

//   // 2. Бүх Form Input-ууд болон Validation UI
//   it('handles all form input changes and validation UI branches', () => {
//     render(<CreateClubCenter />);

//     fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
//       target: { value: 'Coding Club', name: 'name' },
//     });
//     fireEvent.change(
//       screen.getByPlaceholderText(
//         /Энэхүү клубын үндсэн зорилгыг тодорхойлно уу.../i
//       ),
//       { target: { value: 'Learn to code', name: 'goal' } }
//     );

//     const teacherSelect = screen.getByRole('combobox', {
//       name: /хариуцах хүн/i,
//     });
//     fireEvent.change(teacherSelect, { target: { value: 'student' } });
//     fireEvent.change(screen.getByPlaceholderText(/student@example.com/i), {
//       target: { value: 'test@edu.mn' },
//     });

//     fireEvent.change(screen.getByDisplayValue(/301/i), {
//       target: { value: '302' },
//     });
//     fireEvent.change(screen.getByDisplayValue(/13:00/i), {
//       target: { value: '14:00' },
//     });
//     fireEvent.change(screen.getByDisplayValue(/1:30 цаг/i), {
//       target: { value: '2:00' },
//     });

//     const maxStudentsInput = screen.getByPlaceholderText('15');
//     fireEvent.change(maxStudentsInput, { target: { value: '30' } });
//     expect(maxStudentsInput).toHaveValue(30);
//   });

//   // 3. ALERT & SUBMIT COVERAGE (CreateClubCenter Line 89)
//   it('calls alert on form submit and covers onFormSubmit', () => {
//     const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
//     render(<CreateClubCenter />);

//     const submitBtn = screen.getByRole('button', { name: /хүсэлт илгээх/i });
//     fireEvent.click(submitBtn);

//     expect(alertSpy).toHaveBeenCalled();
//     alertSpy.mockRestore();
//   });

//   // 4. Calendar Navigation (CalendarHeader & Empty Slots)
//   it('navigates months and renders empty calendar slots', () => {
//     render(<CreateClubCenter />);
//     const nextBtn = screen.getByTestId('next-month-btn');
//     fireEvent.click(nextBtn);
//     const prevBtn = screen.getByTestId('prev-month-btn');
//     fireEvent.click(prevBtn);
//   });

//   // 5. Logistics Section & Recurrence Logic (LogisticsSection Line 58 Coverage)
//   // 5. Logistics Section & Recurrence Logic (LogisticsSection Line 58 & 65-66 Coverage)
//   it('handles complex date selection and trigger useEffect for recurrence updates and reset', async () => {
//     render(<CreateClubCenter />);

//     // Mocked Today: 15 (2024-04-15)
//     // Select 15th (Monday)
//     const dayButtons = screen
//       .getAllByRole('button')
//       .filter((b) => b.textContent === '15');
//     const activeDay = dayButtons.find((b) => !b.hasAttribute('disabled'));

//     if (activeDay) {
//       fireEvent.click(activeDay); // Selects 15th
//       // Verify selection
//     }

//     // Toggle repeat mode to 'weekly'
//     // Mondays in April 2024: 1, 8, 15, 22, 29 = 5 days
//     // 1 and 8 are past (before 15th). So 15, 22, 29 = 3 days.
//     const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);
//     fireEvent.change(repeatSelect, { target: { value: 'weekly' } });

//     // UseEffect triggers. Wait for update.
//     await waitFor(() => {
//       expect(screen.getByText('3 өдөр сонгосон')).toBeInTheDocument();
//     });

//     // Force another update via useEffect by navigating month
//     // Switching to May 2024. Mondays in May: 6, 13, 20, 27 (4 days).
//     // This ensures currentMonth dependency triggers the effect and updates dates.
//     const nextBtn = screen.getByTestId('next-month-btn');
//     fireEvent.click(nextBtn);

//     await waitFor(() => {
//       expect(screen.getByText('4 өдөр сонгосон')).toBeInTheDocument();
//     });

//     // Explicitly check that a date that WAS added (e.g. 22nd) is now in the list
//     // 22nd is a Monday.

//     // Test Reset (Lines 65-66)
//     const resetBtn = screen.getByTestId('reset-logistics-btn');
//     fireEvent.click(resetBtn);

//     // Expect dates to be empty (0 өдөр сонгосон)
//     await waitFor(() => {
//       expect(screen.getByText('0 өдөр сонгосон')).toBeInTheDocument();
//       // Also repeat select should be 'none' (default display value might be 'Зөвхөн сонгосон...')
//       // 'none' value maps to 'Зөвхөн сонгосон өдрүүдэд' label?
//       // Let's check the select value.
//       expect(repeatSelect).toHaveValue('none');
//     });
//   });

//   // New Test for CreateClubCenter Line 74 (Toggle Remove)
//   it('toggles date selection on and off (CreateClubCenter line 74)', () => {
//     render(<CreateClubCenter />);
//     const buttons = screen
//       .getAllByRole('button')
//       .filter((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
//     const dayBtn = buttons[0];

//     // 1. Select
//     fireEvent.click(dayBtn);
//     // Expect selected style (optional, but good for verification)

//     // 2. Deselect (Should hit line 74)
//     fireEvent.click(dayBtn);

//     // 3. Select again
//     fireEvent.click(dayBtn);
//   });

//   // 6. Date Removal (LogisticsSection Line 66)
//   it('ensures 100% coverage for handleRemoveDate', () => {
//     render(<CreateClubCenter />);
//     // Select a valid date, e.g., 20
//     const dayBtn = screen
//       .getAllByRole('button')
//       .find((b) => !b.hasAttribute('disabled') && b.textContent === '20');
//     if (dayBtn) fireEvent.click(dayBtn);

//     const removeIcon = screen.getByTestId('remove-date-icon');
//     fireEvent.click(removeIcon);
//   });

//   // 7. Recurrent Utils (Deep Scan)
//   describe('Utility Logic Deep Scan', () => {
//     it('covers all branches and loops in RecurrentUtils', () => {
//       const anchor = new Date('2024-05-01');
//       anchor.setHours(0, 0, 0, 0);
//       const anchorTime = anchor.getTime();

//       const monday = new Date('2024-05-06');
//       expect(isBiweeklyMatch(monday, [3], anchorTime)).toBe(false);

//       const twoWeeksLater = new Date('2024-05-15');
//       expect(isBiweeklyMatch(twoWeeksLater, [3], anchorTime)).toBe(true);

//       expect(isWeeklyMatch(anchor, [3])).toBe(true);
//       expect(isWeeklyMatch(anchor, [1])).toBe(false);
//       expect(isMonthlyMatch(anchor, [1])).toBe(true);

//       const config = { weekDays: [3], dayNumbers: [1], anchorTime };
//       const todayDate = new Date('2024-04-01');

//       expect(
//         generateDates(2024, 4, todayDate, 'weekly', config).length
//       ).toBeGreaterThan(0);
//       expect(
//         generateDates(2024, 4, todayDate, 'biweekly', config).length
//       ).toBeGreaterThan(0);
//       expect(
//         generateDates(2024, 4, todayDate, 'monthly', config).length
//       ).toBeGreaterThan(0);
//       expect(checkDateMatch(anchor, 'invalid', config)).toBe(false);
//     });

//     it('covers null/empty branches in utils', () => {
//       const d = new Date();
//       // @ts-expect-error: Testing edge case with null value to cover utility branches
//       expect(isWeeklyMatch(d, null)).toBe(false);
//       // @ts-expect-error: Testing edge case with null value to cover utility branches
//       expect(isMonthlyMatch(d, null)).toBe(false);
//       // @ts-expect-error: Testing edge case with null value to cover utility branches
//       expect(isBiweeklyMatch(d, null, d.getTime())).toBe(false);
//     });
//   });

//   // 8. CalendarDay Branches
//   it('covers CalendarDay isPast and isToday branches', () => {
//     render(<CreateClubCenter />);
//     // Current Time Mocked: 2024-04-15
//     // Select a past date (e.g., 10th) which should be disabled/past style if logic correct
//     // But logic says: disabled={isPast}.
//     // We want to find a disabled button to click?
//     // Actually, usually past dates are disabled.
//     // Let's rely on finding any disabled button.
//     const disabledButtons = screen
//       .getAllByRole('button')
//       .filter((b) => b.hasAttribute('disabled'));
//     if (disabledButtons.length > 0) {
//       fireEvent.click(disabledButtons[0]);
//     }
//   });

//   // 9. Sorting & Branch Coverage for ToggleDate
//   it('covers sorting and extra branches in toggleDate', () => {
//     render(<CreateClubCenter />);
//     const buttons = screen
//       .getAllByRole('button')
//       .filter(
//         (b) =>
//           /^[0-9]+$/.test(b.textContent || '') && !b.hasAttribute('disabled')
//       );

//     if (buttons.length >= 2) {
//       fireEvent.click(buttons[1]); // Add 2nd available date
//       fireEvent.click(buttons[0]); // Add 1st available date (sorting trigger)
//     }
//   });
//   // 10. Switch to None with Empty Selection (LogisticsSection Line 22)
//   it('handles switching to none with empty dates', () => {
//     render(<CreateClubCenter />);
//     const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);
//     fireEvent.change(repeatSelect, { target: { value: 'weekly' } });

//     // forEach-ийн оронд for...of ашиглах (Nesting-ийг багасгана)
//     const daysToClick = ['15', '22'];
//     for (const day of daysToClick) {
//       const btn = screen
//         .getAllByRole('button')
//         .find((b) => b.textContent === day && !b.hasAttribute('disabled'));
//       if (btn) fireEvent.click(btn);
//     }

//     fireEvent.change(repeatSelect, { target: { value: 'none' } });
//   });

//   // 11. Default Recurrence with Empty Selection (LogisticsSection Line 26)
//   it('defaults to today if recurrence checked with no dates', async () => {
//     // Initial state: 0 dates.
//     render(<CreateClubCenter />);

//     // Switch to weekly without selecting any date
//     const repeatSelect = screen.getByDisplayValue(/Зөвхөн сонгосон өдрүүдэд/i);
//     fireEvent.change(repeatSelect, { target: { value: 'weekly' } });

//     // Logic: if empty, defaults to today (15th of April, Monday).
//     // Mondays in April: 1, 8, 15, 22, 29.
//     // Recurrence logic filters past dates (1, 8).
//     // So 15, 22, 29 remain -> 3 dates.
//     await waitFor(() => {
//       expect(screen.getByText('3 өдөр сонгосон')).toBeInTheDocument();
//     });
//   });
// });
