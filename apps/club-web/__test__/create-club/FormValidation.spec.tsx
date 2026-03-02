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
  INITIAL_FORM_DATA,
} from '../../components/create-club/types';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';

import { PreferredTeacherList } from '../../components/create-club/PreferredTeacherList';
import { LogisticsForm } from '../../components/create-club/LogisticsForm';

// Global window.alert is mocked in jest.setup.ts

const mocks = [
  {
    request: { query: GET_ALL_CLUBS },
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
    request: { query: GET_ALL_TEACHERS },
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
      variables: expect.anything(),
    },
    result: {
      data: {
        createClubWithSchedules: {
          id: 'new-club-id',
          name: 'Coding Club',
          __typename: 'Club',
        },
      },
    },
  },
];

describe('Club Form & Validation UI', () => {
  afterEach(() => {
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

  const fillStep2 = async () => {
    await screen.findByLabelText(/Давтамж/i);
    const btns = screen.getAllByRole('button');
    const dayBtn = btns.find((b) => b.textContent === '16');
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

    await screen.findByLabelText(/Давтамж/i);
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

  it('covers Step1 preferredTeachers fallback branches', () => {
    const mockSetFormData = jest.fn();
    const mockTeachers = [
      {
        id: '1',
        firstName: 'T1',
        lastName: 'L1',
        profilePicture: '',
        __typename: 'Teacher' as const,
      },
    ];

    const formData1 = {
      ...INITIAL_FORM_DATA,
      preferredTeachers: undefined as unknown as string[],
    };
    render(
      <Step1
        formData={formData1}
        setFormData={mockSetFormData}
        teachers={mockTeachers}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockSetFormData).toHaveBeenCalled();
  });

  it('covers Step1 empty teachers branch', () => {
    render(
      <Step1
        formData={INITIAL_FORM_DATA}
        setFormData={() => { }}
        teachers={undefined}
      />
    );
    expect(screen.getByText(/Багшийн мэдээлэл олдсонгүй/i)).toBeInTheDocument();
  });

  it('covers PreferredTeacherList onToggle', () => {
    const mockOnToggle = jest.fn();
    const mockTeachers = [
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
        teachers={mockTeachers}
        selectedIds={[]}
        onToggle={mockOnToggle}
      />
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockOnToggle).toHaveBeenCalledWith('1');
  });

  it('covers ClubForm help toggle', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    const helpBtn = screen.getByRole('button', { name: /Тусламж/i });
    fireEvent.click(helpBtn);
    expect(screen.getByText(/Хаах/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Хаах/i }));
    expect(screen.getByText(/Тусламж/i)).toBeInTheDocument();
  });

  it('covers teacher name branch without last name', () => {
    const mockTeachers = [
      { id: '1', firstName: 'OnlyFirst', lastName: '', __typename: 'Teacher' as const },
    ];
    render(
      <PreferredTeacherList
        teachers={mockTeachers}
        selectedIds={[]}
        onToggle={() => { }}
      />
    );
    expect(screen.getByText('OnlyFirst')).toBeInTheDocument();
  });

  it('covers LogisticsForm default errors branch', () => {
    render(
      <LogisticsForm
        formData={INITIAL_FORM_DATA}
        setFormData={() => { }}
        onRepeatChange={() => { }}
      />
    );
    expect(screen.getByLabelText(/Давтамж/i)).toBeInTheDocument();
  });

  it('handles mutation rejection with empty message', async () => {
    const errorMock = {
      request: {
        query: CREATE_CLUB_WITH_SCHEDULE,
        variables: expect.anything(),
      },
      error: new Error('Mutation Error'),
    };

    render(
      <MockedProvider mocks={[...mocks, errorMock]}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    fillStep1();
    await fillStep2();
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));

    await waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining('Алдаа гарлаа')
      )
    );
  });

  it('covers fallback error alert when res.data is null', async () => {
    const nullDataMock = {
      request: {
        query: CREATE_CLUB_WITH_SCHEDULE,
        variables: expect.anything(),
      },
      result: { data: null },
    };

    render(
      <MockedProvider mocks={[...mocks, nullDataMock]}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findByText(/Клуб бүртгүүлэх/i);
    fillStep1();
    await fillStep2();
    fireEvent.click(screen.getByRole('button', { name: /хүсэлт илгээх/i }));
    await waitFor(() => expect(window.alert).toHaveBeenCalled());
  });

  it('covers toggleDate branch for past date (simulated)', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <CreateClubCenter />
      </MockedProvider>
    );
    await screen.findAllByText(/Клуб бүртгүүлэх/i);
    fillStep1();
    await screen.findByLabelText(/Давтамж/i);

    const btns = screen.getAllByRole('button');
    const day1 = btns.find((b) => b.textContent === '1');
    if (day1) {
      fireEvent.click(day1);
    }
  });
});
