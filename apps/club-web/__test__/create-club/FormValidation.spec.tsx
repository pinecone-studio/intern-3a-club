import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { Step1 } from '../../components/create-club/Step1';
import { FormDataType } from '../../components/create-club/types';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';

const mocks = [
  {
    request: {
      query: CREATE_CLUB_WITH_SCHEDULE,
      variables: {
        input: {
          name: 'Coding Club',
          description: 'Learn to code',
          type: 'mentor',
          teacherId: '1',
          minMember: 0,
          maxMember: 0,
        },
        startDate: '2024-04-14',
        classroom: '301',
        startTime: '13:00',
        duration: 90,
        frequency: 'ONCE',
        selectedDays: ['MONDAY'],
      },
    },
    result: {
      data: {
        createClubWithSchedules: {
          id: '1',
          name: 'Coding Club',
        },
      },
    },
  },
];

afterEach(cleanup);

describe('Club Form & Validation UI', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  const fillStep1 = () => {
    fireEvent.change(screen.getByLabelText(/Клубын нэр/i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    fireEvent.change(screen.getByLabelText(/Хариуцах хүн/i), {
      target: { value: '1', name: 'teacher' },
    });
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
  };

  it('handles all form input changes and validation UI branches', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();

    // Step 2
    fireEvent.change(screen.getByLabelText(/Давтамж/i), { target: { value: 'weekly' } });
    fireEvent.change(screen.getByLabelText(/Орох Анги/i), { target: { value: '302' } });
    fireEvent.change(screen.getByLabelText(/Эхлэх цаг/i), { target: { value: '14:00' } });
    fireEvent.change(screen.getByLabelText(/Үргэлжлэх/i), { target: { value: '2:00' } });

    const maxInput = screen.getByPlaceholderText('15');
    fireEvent.change(maxInput, { target: { value: '30' } });
    expect(maxInput).toHaveValue(30);
  });

  it('calls alert on form submit', async () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();

    const dayBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    if (dayBtn) fireEvent.click(dayBtn);

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() => expect(alertSpy).toHaveBeenCalledWith('Клуб амжилттай үүслээ!'), { timeout: 3000 });
    alertSpy.mockRestore();
  });

  it('covers student email field visibility', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fireEvent.change(screen.getByLabelText(/Хариуцах хүн/i), { target: { value: 'student' } });
    const emailInput = screen.getByTestId('student-email-input');
    fireEvent.change(emailInput, { target: { value: 'test@edu.mn' } });
    expect(emailInput).toBeInTheDocument();
  });

  it('covers error display and validation failure in Step 1', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
    expect(screen.getAllByText(/Заавал/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
  });

  it('handles back button navigation', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();
    fireEvent.click(screen.getByText(/Буцах/i));
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
  });

  it('covers Step 2 validation failure', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();
    // submit without dates
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers Step1 null formData branch', () => {
    const { container } = render(
      <Step1 formData={null as unknown as FormDataType} setFormData={() => { }} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('covers Step 2 room validation failure', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();
    fireEvent.change(screen.getByLabelText(/Орох Анги/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers month change and date untoggle', () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();

    // Month next
    fireEvent.click(screen.getByTestId('next-month-btn'));
    expect(screen.getByText(/May/i)).toBeInTheDocument();

    // Month prev
    fireEvent.click(screen.getByTestId('prev-month-btn'));
    expect(screen.getByText(/April/i)).toBeInTheDocument();

    // Toggle on
    const dayBtn = screen.getByRole('button', { name: /16/i });
    fireEvent.click(dayBtn);
    expect(dayBtn).toHaveClass('bg-primary');

    // Toggle off
    fireEvent.click(dayBtn);
    expect(dayBtn).not.toHaveClass('bg-primary');
  });

  it('calls alert on mutation error and covers catch block', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => { });

    const errorMocks = [
      {
        request: {
          query: CREATE_CLUB_WITH_SCHEDULE,
          variables: {
            input: {
              name: 'Coding Club',
              description: 'Learn to code',
              type: 'mentor',
              teacherId: '1',
              minMember: 0,
              maxMember: 0,
            },
            startDate: '2024-04-14',
            classroom: '301',
            startTime: '13:00',
            duration: 90,
            frequency: 'ONCE',
            selectedDays: ['MONDAY'],
          },
        },
        error: new Error('GraphQL Error'),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks}>
        <CreateClubCenter />
      </MockedProvider>
    );

    fillStep1();

    const dayBtn = screen.getByRole('button', { name: /15/i });
    fireEvent.click(dayBtn);

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() => expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Алдаа гарлаа')));
    // In current implementation, onError is called AND mutate throws if using MockedProvider with 'error'
    // So both should be hit.

    alertSpy.mockRestore();
    consoleSpy.mockRestore();
  });
});
