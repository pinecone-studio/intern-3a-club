import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { Step1 } from '../../components/create-club/Step1';

afterEach(cleanup);

describe('Club Form & Validation UI', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it('handles all form input changes and validation UI branches (LogisticsForm 28, 32, 36)', () => {
    render(<CreateClubCenter />);

    // Basic Info
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'bat', name: 'teacher' },
    });

    // Move to Step 2
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    // Logistics Inputs (Coverage for Line 28, 32, 36)
    const selects = screen.getAllByRole('combobox');

    // repeat
    fireEvent.change(selects[0], { target: { value: 'weekly' } });
    // room
    fireEvent.change(selects[1], { target: { value: '302' } });

    // time
    fireEvent.change(selects[2], { target: { value: '14:00' } });

    // duration
    fireEvent.change(selects[3], { target: { value: '2:00' } });

    const maxStudentsInput = screen.getByPlaceholderText('15');
    fireEvent.change(maxStudentsInput, { target: { value: '30' } });
    expect(maxStudentsInput).toHaveValue(30);
  });

  it('calls alert on form submit', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<CreateClubCenter />);

    // Fill Step 1
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

    // Fill Step 2 (Room is already 301 by default)

    // Select a date (Required)
    const dayBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    if (dayBtn) fireEvent.click(dayBtn);

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(alertSpy).toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it('covers student email field visibility (ClubForm line 90)', () => {
    render(<CreateClubCenter />);

    const teacherSelect = screen.getByRole('combobox');
    fireEvent.change(teacherSelect, { target: { value: 'student' } });

    const emailInput = screen.getByTestId('student-email-input');
    fireEvent.change(emailInput, { target: { value: 'test@edu.mn' } });

    expect(emailInput).toBeInTheDocument();
  });

  it('covers error display and validation failure in Step 1', () => {
    render(<CreateClubCenter />);

    // Click Next without filling anything
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    // Should see "Заавал" error messages
    const errors = screen.getAllByText(/Заавал/i);
    expect(errors.length).toBeGreaterThan(0);
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument(); // Still on Step 1
  });

  it('handles back button navigation and branch coverage for ProgressBar', () => {
    render(<CreateClubCenter />);

    // Fill Step 1
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

    // Click Back
    fireEvent.click(screen.getByText(/Буцах/i));
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument(); // Back on Step 1
  });

  it('covers Step 2 validation failure', () => {
    render(<CreateClubCenter />);

    // Fill Step 1
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

    // Deselect all dates (if any) or just click submit without dates
    // In current logic, room is '301' by default, but dates is empty.
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    // Should stay on Step 2
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers Step1 null formData branch', () => {
    const { container } = render(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Step1 formData={null as any} setFormData={() => {}} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('covers Step 2 room validation failure', () => {
    render(<CreateClubCenter />);

    // Fill Step 1
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

    // Empty the room select
    const selects = screen.getAllByRole('combobox');
    fireEvent.change(selects[1], { target: { value: '' } });

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    // Should stay on Step 2
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });
});
