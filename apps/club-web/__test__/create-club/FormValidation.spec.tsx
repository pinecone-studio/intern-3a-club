import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { Step1 } from '../../components/create-club/Step1';
import { FormDataType } from '../../components/create-club/types';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';
import { toast } from 'sonner';

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const mocks = [
  {
    request: {
      query: GET_ALL_CLUBS,
    },
    result: {
      data: {
        getAllClubs: [
          {
            id: '1',
            name: 'Mock Club',
            status: 'approved',
            description: 'Mock Description',
            teacherId: '1',
            type: 'mentor',
            minMember: 0,
            maxMember: 20,
            timetables: [],
            __typename: 'Club'
          }
        ],
      },
    },
  },
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
        startDate: '2024-04-15',
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
  {
    request: {
      query: GET_ALL_TEACHERS,
    },
    result: {
      data: {
        getAllTeachers: [
          { id: '1', firstName: 'Teacher', lastName: 'One', profilePicture: '', __typename: 'Teacher' },
        ],
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
    jest.clearAllMocks();
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
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

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

  it('calls toast.success on form submit', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    fillStep1();

    const dayBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    if (dayBtn) fireEvent.click(dayBtn);

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() => expect(toast.success).toHaveBeenCalledWith('Клуб амжилттай үүслээ'), { timeout: 3000 });
  });

  it('covers student email field visibility and student teacher mutation branch', async () => {
    const studentMock = {
      request: {
        query: CREATE_CLUB_WITH_SCHEDULE,
        variables: {
          input: {
            name: 'Coding Club',
            description: 'Learn to code',
            type: 'mentor',
            teacherId: null,
            minMember: 0,
            maxMember: 0,
          },
          startDate: '2024-04-15',
          classroom: '301',
          startTime: '13:00',
          duration: 90,
          frequency: 'ONCE',
          selectedDays: ['MONDAY'],
        },
      },
      result: {
        data: {
          createClubWithSchedules: { id: '2', name: 'Coding Club' },
        },
      },
    };

    render(
      <MockedProvider mocks={[...mocks, studentMock]}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    // Initial check for email input
    fireEvent.change(screen.getByLabelText(/Хариуцах хүн/i), { target: { value: 'student' } });
    const emailInput = screen.getByTestId('student-email-input');
    fireEvent.change(emailInput, { target: { value: 'test@edu.mn' } });
    expect(emailInput).toBeInTheDocument();

    // Fill form as student
    fireEvent.change(screen.getByLabelText(/Клубын нэр/i), {
      target: { value: 'Coding Club', name: 'name' },
    });
    fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), {
      target: { value: 'Learn to code', name: 'goal' },
    });
    // teacher is already 'student'
    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

    const dayBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    expect(dayBtn).toBeDefined();
    if (dayBtn) fireEvent.click(dayBtn);

    const submitBtn = screen.getByRole('button', { name: /хүсэлт илгээх/i });
    fireEvent.click(submitBtn);

    await waitFor(() => expect(toast.success).toHaveBeenCalledWith('Клуб амжилттай үүслээ'), { timeout: 3000 });
  });

  it('covers error display and validation failure in Step 1', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
    expect(screen.getAllByText(/Заавал/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
  });

  it('handles back button navigation', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    fillStep1();
    fireEvent.click(screen.getByText(/Буцах/i));
    expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
  });

  it('covers Step 2 validation failure', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    fillStep1();
    // submit without dates
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Огноо сонгоно уу'));
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers Step1 null formData branch', () => {
    const { container } = render(
      <Step1 formData={null as unknown as FormDataType} setFormData={() => { }} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('covers Step 2 room validation failure', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

    fillStep1();
    fireEvent.change(screen.getByLabelText(/Орох Анги/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers month change and date untoggle', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findByText(/Teacher One/i);

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
            startDate: '2024-04-15',
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
    await screen.findByText(/Клуб бүртгүүлэх/i);
    await waitFor(() => expect(screen.queryAllByTestId('loading-skeleton')).toHaveLength(0));

    fillStep1();

    const dayBtn = screen.getByRole('button', { name: /15/i });
    fireEvent.click(dayBtn);

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith(expect.stringContaining('Алдаа гарлаа')));
    // In current implementation, onError is called AND mutate throws if using MockedProvider with 'error'
    // So both should be hit.

    consoleSpy.mockRestore();
  });
});
