import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';

afterEach(cleanup);

describe('Club Form & Validation UI', () => {
  it('handles all form input changes and validation UI branches (LogisticsForm 28, 32, 36)', () => {
    render(<CreateClubCenter />);

    // Basic Info
    fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        /Энэхүү клубын үндсэн зорилгыг тодорхойлно уу.../i
      ),
      {
        target: { value: 'Learn to code', name: 'goal' },
      }
    );

    // Logistics Inputs (Coverage for Line 28, 32, 36)
    fireEvent.change(screen.getByDisplayValue(/301/i), {
      target: { value: '302' },
    });
    fireEvent.change(screen.getByDisplayValue(/13:00/i), {
      target: { value: '14:00' },
    });
    fireEvent.change(screen.getByDisplayValue(/1:30 цаг/i), {
      target: { value: '2:00' },
    });

    const maxStudentsInput = screen.getByPlaceholderText('15');
    fireEvent.change(maxStudentsInput, { target: { value: '30' } });
    expect(maxStudentsInput).toHaveValue(30);
  });

  it('calls alert on form submit', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<CreateClubCenter />);
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(alertSpy).toHaveBeenCalled();
    alertSpy.mockRestore();
  });

  it('covers student email field visibility (ClubForm line 90)', () => {
    render(<CreateClubCenter />);

    const teacherSelect = screen.getByRole('combobox', {
      name: /хариуцах хүн/i,
    });
    fireEvent.change(teacherSelect, { target: { value: 'student' } });

    const emailInput = screen.getByPlaceholderText(/student@example.com/i);
    fireEvent.change(emailInput, { target: { value: 'test@edu.mn' } });

    expect(emailInput).toBeInTheDocument();
  });
});
