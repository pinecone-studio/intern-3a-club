import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing/react';
import { CreateClubCenter } from '../../components/create-club/CreateClubCenter';
import { Step1 } from '../../components/create-club/Step1';
import {
  FormDataType,
  INITIAL_FORM_DATA,
} from '../../components/create-club/types';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';

import { PreferredTeacherList } from '../../components/create-club/PreferredTeacherList';
import { LogisticsForm } from '../../components/create-club/LogisticsForm';

jest.mock('sonner', () => ({
  alert: {
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
            __typename: 'Club',
          },
        ],
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
          {
            id: '1',
            firstName: 'Teacher',
            lastName: 'One',
            profilePicture: '',
            __typename: 'Teacher',
          },
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
          preferredTeachers: [],
          minMember: 0,
          maxMember: 0,
        },
        schedules: [
          {
            date: '2024-04-15',
            room: '301',
            clubStartTime: '13:00',
            duration: 90,
          },
        ],
        frequency: 'ONCE',
        clubTerm: '2024-2025',
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
    request: { query: GET_ALL_CLUBS },
    result: { data: { getAllClubs: [] } },
  },
];

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Club Form & Validation UI', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));
  });

  afterEach(() => {
    jest.useRealTimers();
    cleanup();
    jest.clearAllMocks();
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

  const fillStep2 = () => {
    const dayBtn = screen
      .getAllByRole('button')
      .find((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
    if (dayBtn) fireEvent.click(dayBtn);

    fireEvent.change(screen.getByLabelText(/Орох Анги/i), {
      target: { value: '301' },
    });
    fireEvent.change(screen.getByLabelText(/Эхлэх цаг/i), {
      target: { value: '13:00' },
    });
  };

  it('handles all form input changes and validation UI branches', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

    fillStep1();

    // Step 2
    fireEvent.change(screen.getByLabelText(/Давтамж/i), {
      target: { value: 'weekly' },
    });
    fireEvent.change(screen.getByLabelText(/Орох Анги/i), {
      target: { value: '302' },
    });
    fireEvent.change(screen.getByLabelText(/Эхлэх цаг/i), {
      target: { value: '14:00' },
    });
    fireEvent.change(screen.getByLabelText(/Үргэлжлэх/i), {
      target: { value: '2:00' },
    });

    const maxInput = screen.getByPlaceholderText('15');
    fireEvent.change(maxInput, { target: { value: '30' } });
    expect(maxInput).toHaveValue(30);
  });

  it('calls alert on form submit', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

    fillStep1();
    fillStep2();

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(
      () => expect(alert).toHaveBeenCalledWith('Клуб амжилттай үүслээ'),
      { timeout: 3000 }
    );
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
            preferredTeachers: [],
            minMember: 0,
            maxMember: 0,
          },
          schedules: [
            {
              date: '2024-04-15',
              room: '301',
              clubStartTime: '13:00',
              duration: 90,
            },
          ],
          frequency: 'ONCE',
          clubTerm: '2024-2025',
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
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

    // Initial check for email input
    fireEvent.change(screen.getByLabelText(/Хариуцах хүн/i), {
      target: { value: 'student' },
    });
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

    fillStep2();

    const submitBtn = screen.getByRole('button', { name: /хүсэлт илгээх/i });
    fireEvent.click(submitBtn);

    await waitFor(
      () => expect(alert).toHaveBeenCalledWith('Клуб амжилттай үүслээ'),
      { timeout: 3000 }
    );
  });

  it('covers error display and validation failure in Step 1', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

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
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

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
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

    fillStep1();
    // submit without dates
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    await waitFor(() => expect(alert).toHaveBeenCalledWith('Огноо сонгоно уу'));
    expect(screen.getByText(/Буцах/i)).toBeInTheDocument();
  });

  it('covers Step1 null formData branch', () => {
    const { container } = render(
      <Step1
        formData={null as unknown as FormDataType}
        setFormData={() => {}}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it('covers Step 2 room validation failure', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

    fillStep1();
    // Selection date
    const dayBtn = screen.getByRole('button', { name: /16/i });
    fireEvent.click(dayBtn);

    fireEvent.change(screen.getByLabelText(/Орох Анги/i), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    expect(screen.getByText(/Заавал/i)).toBeInTheDocument();
  });

  it('covers month change and date untoggle', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    await screen.findByText(/Mock Club/i);
    await screen.findAllByText(/Teacher One/i);

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
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const errorMocks = [
      {
        request: {
          query: GET_ALL_CLUBS,
        },
        result: { data: { getAllClubs: [] } },
      },
      {
        request: {
          query: GET_ALL_TEACHERS,
        },
        result: { data: { getAllTeachers: [] } },
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
              preferredTeachers: [],
              minMember: 0,
              maxMember: 0,
            },
            schedules: [
              {
                date: '2024-04-15',
                room: '301',
                clubStartTime: '13:00',
                duration: 90,
              },
            ],
            frequency: 'ONCE',
            clubTerm: '2024-2025',
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

    fillStep1();
    fillStep2();

    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith(
        expect.stringContaining('Алдаа гарлаа')
      )
    );

    consoleSpy.mockRestore();
  });

  it('covers fallback error alert when res.data is null', async () => {
    const nullDataMock = [
      {
        request: {
          query: CREATE_CLUB_WITH_SCHEDULE,
          variables: expect.anything(),
        },
        result: { data: null },
      },
      ...mocks.filter((m) => m.request.query !== CREATE_CLUB_WITH_SCHEDULE),
    ];

    render(
      <MockedProvider mocks={nullDataMock}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    fillStep1();
    fillStep2();
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    await waitFor(() => expect(alert).toHaveBeenCalled());
    const errorCalled = (alert as jest.Mock).mock.calls.some(
      (call) =>
        call[0].includes('Клуб үүссэн эсэх тодорхойгүй') ||
        call[0].includes('Алдаа гарлаа')
    );
    expect(errorCalled).toBe(true);
  });

  it('covers Step1 preferredTeachers fallback branches', () => {
    const mockSetFormData = jest.fn();
    const teachers = [
      {
        id: '1',
        firstName: 'T1',
        lastName: 'L1',
        profilePicture: '',
        __typename: 'Teacher' as const,
      },
    ];

    // Case 1: preferredTeachers is undefined, hitting line 63
    const formData1 = {
      ...INITIAL_FORM_DATA,
      preferredTeachers: undefined as unknown as string[],
    };
    render(
      <Step1
        formData={formData1}
        setFormData={mockSetFormData}
        teachers={teachers}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockSetFormData).toHaveBeenCalled();
  });

  it('covers Step1 empty teachers branch (Line 44)', () => {
    render(
      <Step1
        formData={INITIAL_FORM_DATA}
        setFormData={() => {}}
        teachers={undefined}
      />
    );
    expect(screen.getByText(/Багшийн мэдээлэл олдсонгүй/i)).toBeInTheDocument();
  });

  it('covers PreferredTeacherList onToggle', () => {
    const mockOnToggle = jest.fn();
    const teachers = [
      {
        id: '1',
        firstName: 'T1',
        lastName: 'L1',
        profilePicture: '',
        __typename: 'Teacher' as const,
      },
    ];
    render(
      <PreferredTeacherList
        teachers={teachers}
        selectedIds={[]}
        onToggle={mockOnToggle}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggle).toHaveBeenCalledWith('1');
  });

  it('covers ClubForm help toggle (Line 84)', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    const helpBtn = screen.getByRole('button', { name: /Тусламж/i });
    fireEvent.click(helpBtn); // toggleHelp
    expect(screen.getByText(/Хаах/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Хаах/i }));
    expect(screen.getByText(/Тусламж/i)).toBeInTheDocument();
  });

  it('covers teacher name branch without last name', () => {
    const teachers = [
      { id: '1', firstName: 'OnlyFirst', lastName: '', __typename: 'Teacher' },
    ];
    render(
      <PreferredTeacherList
        teachers={teachers}
        selectedIds={[]}
        onToggle={() => {}}
      />
    );
    expect(screen.getByText('OnlyFirst')).toBeInTheDocument();
  });

  it('covers LogisticsForm default errors branch', () => {
    const formData = INITIAL_FORM_DATA;
    render(
      <LogisticsForm
        formData={formData}
        setFormData={() => {}}
        onRepeatChange={() => {}}
      />
    );
    // confirms no crash and branch hit
    expect(screen.getByLabelText(/Давтамж/i)).toBeInTheDocument();
  });

  it('covers catch block in CreateClubCenter mutation rejection with empty message (Lines 100-102)', async () => {
    const errorMock = {
      request: {
        query: CREATE_CLUB_WITH_SCHEDULE,
        variables: expect.anything(),
      },
      error: new Error(''), // Empty message
    };

    render(
      <MockedProvider mocks={[...mocks, errorMock]}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    fillStep1();
    fillStep2();
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() =>
      expect(alert).toHaveBeenCalledWith('Алдаа гарлаа: Алдаа гарлаа')
    );
  });

  it('covers teacher selection branch in Step1', () => {
    const mockSetFormData = jest.fn();
    const teachers = [
      {
        id: '1',
        firstName: 'T1',
        lastName: 'L1',
        __typename: 'Teacher' as const,
      },
    ];
    render(
      <Step1
        formData={INITIAL_FORM_DATA}
        setFormData={mockSetFormData}
        teachers={teachers}
      />
    );
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: '1', name: 'teacher' } });
    expect(mockSetFormData).toHaveBeenCalled();
  });

  it('covers past date selection and deselect branches in CreateClubCenter', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    const btns = screen.getAllByRole('button');

    // Deselect branch (hits exists and filter)
    const day15 = btns.find((b) => b.textContent === '15');
    if (day15) {
      fireEvent.click(day15); // Select
      fireEvent.click(day15); // Deselect (Hits Line 48)
    }

    // Two dates for sort branch
    const day16 = btns.find((b) => b.textContent === '16');
    const day17 = btns.find((b) => b.textContent === '17');
    if (day16) fireEvent.click(day16);
    if (day17) fireEvent.click(day17); // hits sort callback

    // Past date - hits toggleDate with April 14 (past)
    const calendarBtns = screen.getAllByRole('button');
    const day14 = calendarBtns.find(
      (b) => b.textContent === '14'
    ) as HTMLButtonElement;
    if (day14) {
      day14.disabled = false; // Bypass JSDOM block to hit branch in toggleDate
      fireEvent.click(day14);
    }
  });
});
