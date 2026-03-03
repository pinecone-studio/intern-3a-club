/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { ClubForm } from '../../components/create-club/ClubForm';
import { Step1 } from '../../components/create-club/Step1';
import { PreferredTeacherList } from '../../components/create-club/PreferredTeacherList';
import { LogisticsForm } from '../../components/create-club/LogisticsForm';
import { INITIAL_FORM_DATA } from '../../components/create-club/types';
import { buildMutationVariables } from '../../components/create-club/create-club-helpers';
import { GET_ALL_CLUBS, GET_ALL_TEACHERS } from '../../lib/type';
import { CREATE_CLUB_WITH_SCHEDULE } from '../../graphql/mutations';

// Global window.alert is mocked in jest.setup.ts

const mockTeachers = [
    { id: '1', firstName: 'Teacher', lastName: 'One', profilePicture: '', __typename: 'Teacher' as const },
];

const baseMocks = [
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
                getAllTeachers: mockTeachers,
            },
        },
    },
];

afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

// ─── create-club-helpers.ts line 57: teacher === 'student' → teacherId = null ───
describe('buildMutationVariables student branch', () => {
    it('sets teacherId to null when teacher is student (line 57)', () => {
        const vars = buildMutationVariables(
            { ...INITIAL_FORM_DATA, teacher: 'student' },
            [new Date()]
        );
        expect(vars.input.teacherId).toBeNull();
    });
});

// ─── PreferredTeacherList.tsx lines 16, 41 ───
describe('PreferredTeacherList coverage', () => {
    it('calls onToggle when checkbox clicked (line 16)', () => {
        const onToggle = jest.fn();
        render(
            <PreferredTeacherList
                teachers={mockTeachers}
                selectedIds={[]}
                onToggle={onToggle}
            />
        );
        fireEvent.click(screen.getByRole('checkbox'));
        expect(onToggle).toHaveBeenCalledWith('1');
    });

    it('renders empty state message (line 41)', () => {
        render(
            <PreferredTeacherList teachers={[]} selectedIds={[]} onToggle={() => { }} />
        );
        expect(
            screen.getByText(/Багшийн мэдээлэл олдсонгүй/i)
        ).toBeInTheDocument();
    });
});

// ─── Step1.tsx lines 123-125: handlePreferredToggle body ───
describe('Step1 handlePreferredToggle coverage', () => {
    it('calls setFormData with updated preferredTeachers when teacher is selected (lines 123-125)', () => {
        const setFormData = jest.fn();
        render(
            <Step1
                formData={{ ...INITIAL_FORM_DATA, teacher: '1', preferredTeachers: [] }}
                setFormData={setFormData}
                teachers={mockTeachers}
            />
        );
        fireEvent.click(screen.getByRole('checkbox'));
        expect(setFormData).toHaveBeenCalledWith(
            expect.objectContaining({ preferredTeachers: ['1'] })
        );
    });

    it('removes teacher from preferredTeachers when already selected (line 123 filter branch)', () => {
        const setFormData = jest.fn();
        render(
            <Step1
                formData={{ ...INITIAL_FORM_DATA, teacher: '1', preferredTeachers: ['1'] }}
                setFormData={setFormData}
                teachers={mockTeachers}
            />
        );
        // checkbox is checked, clicking again should remove
        fireEvent.click(screen.getByRole('checkbox'));
        expect(setFormData).toHaveBeenCalledWith(
            expect.objectContaining({ preferredTeachers: [] })
        );
    });

    it('handles undefined preferredTeachers gracefully (line 123 || [] branch)', () => {
        const setFormData = jest.fn();
        render(
            <Step1
                formData={{
                    ...INITIAL_FORM_DATA,
                    teacher: '1',
                    preferredTeachers: undefined as unknown as string[],
                }}
                setFormData={setFormData}
                teachers={mockTeachers}
            />
        );
        fireEvent.click(screen.getByRole('checkbox'));
        expect(setFormData).toHaveBeenCalledWith(
            expect.objectContaining({ preferredTeachers: ['1'] })
        );
    });
});

// ─── LogisticsForm.tsx line 20: errors = {} default parameter ───
describe('LogisticsForm default errors parameter branch', () => {
    it('renders correctly without errors prop (covers errors = {} default)', () => {
        render(
            <LogisticsForm
                formData={INITIAL_FORM_DATA}
                setFormData={() => { }}
                onRepeatChange={() => { }}
            // no errors prop — exercises the `errors = {}` default
            />
        );
        expect(screen.getByLabelText(/Давтамж/i)).toBeInTheDocument();
    });
});

// ─── ClubForm.tsx lines 71-76: onSubmit body (step 2 valid submit) ───
describe('ClubForm onSubmit coverage', () => {
    it('calls handleSubmit and sets submissionStatus when step 2 has no errors (lines 71-76)', async () => {
        const mockSubmit = jest
            .fn()
            .mockResolvedValue({ success: true, message: 'Амжилттай' });

        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'Club', goal: 'Goal', room: '301' }}
                setFormData={() => { }}
                selectedDates={[new Date()]}
                setSelectedDates={() => { }}
                currentMonth={new Date()}
                handleMonthChange={() => { }}
                renderCalendarDays={() => []}
                handleSubmit={mockSubmit}
                teachers={mockTeachers as any}
            />
        );

        // Advance to step 2
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        // Submit — room is '301' so getStep2Errors returns {}
        fireEvent.click(
            screen.getAllByRole('button').find((b) =>
                b.textContent?.includes('Хүсэлт илгээх')
            )!
        );

        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
        // The result message is displayed
        await waitFor(() =>
            expect(screen.getByText('Амжилттай')).toBeInTheDocument()
        );
    });

    it('does NOT call handleSubmit when room is empty (step 2 error branch)', async () => {
        const mockSubmit = jest.fn();
        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'Club', goal: 'Goal', room: '' }}
                setFormData={() => { }}
                selectedDates={[new Date()]}
                setSelectedDates={() => { }}
                currentMonth={new Date()}
                handleMonthChange={() => { }}
                renderCalendarDays={() => []}
                handleSubmit={mockSubmit}
                teachers={mockTeachers as any}
            />
        );

        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
        fireEvent.click(
            screen.getAllByRole('button').find((b) =>
                b.textContent?.includes('Хүсэлт илгээх')
            )!
        );

        await waitFor(() => expect(mockSubmit).not.toHaveBeenCalled());
    });
});

// ─── CreateClubCenter.tsx lines 84-87, 90-93, 96-101, 106-110 ───
describe('CreateClubCenter coverage', () => {
    it('shows alert when no dates selected (line 106-108)', async () => {
        render(
            <MockedProvider mocks={baseMocks}>
                <CreateClubCenter />
            </MockedProvider>
        );

        await screen.findAllByText(/Клуб бүртгүүлэх/i);
        await screen.findByText(/Teacher One/i);

        // Fill step 1
        fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
            target: { value: 'Club', name: 'name' },
        });
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: '1', name: 'teacher' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
            target: { value: 'Goal', name: 'goal' },
        });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        // Step 2 — click submit without picking dates
        fireEvent.click(
            screen.getAllByRole('button').find((b) =>
                b.textContent?.includes('Хүсэлт илгээх')
            )!
        );

        await waitFor(() =>
            expect(window.alert).toHaveBeenCalledWith('Огноо сонгоно уу')
        );
    });

    it('calls handleReset (alert success) on successful mutation (lines 84-87, 90-93)', async () => {
        const successMocks = [
            ...baseMocks,
            {
                request: {
                    query: CREATE_CLUB_WITH_SCHEDULE,
                    variables: expect.anything(),
                },
                result: {
                    data: {
                        createClubWithSchedules: { id: 'new-id', name: 'Club', __typename: 'Club' },
                    },
                },
            },
        ];

        jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));

        render(
            <MockedProvider mocks={successMocks}>
                <CreateClubCenter />
            </MockedProvider>
        );

        await screen.findAllByText(/Клуб бүртгүүлэх/i);
        await screen.findByText(/Teacher One/i);

        // Fill step 1
        fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
            target: { value: 'Club', name: 'name' },
        });
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: '1', name: 'teacher' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
            target: { value: 'Goal', name: 'goal' },
        });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        // Pick a date (day 15)
        const dayBtns = screen
            .getAllByRole('button')
            .filter((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
        if (dayBtns[0]) fireEvent.click(dayBtns[0]);

        // Submit
        fireEvent.click(
            screen.getAllByRole('button').find((b) =>
                b.textContent?.includes('Хүсэлт илгээх')
            )!
        );

        await waitFor(() =>
            expect(window.alert).toHaveBeenCalledWith('Клуб амжилттай үүслээ')
        );

        jest.useRealTimers();
    });

    it('shows mutation error when GraphQL errors returned (line 97 requestMutation → handleMutationResult)', async () => {
        const errorMocks = [
            ...baseMocks,
            {
                request: {
                    query: CREATE_CLUB_WITH_SCHEDULE,
                    variables: expect.anything(),
                },
                result: {
                    errors: [{ message: 'GraphQL Error' }],
                },
            },
        ];

        jest.useFakeTimers().setSystemTime(new Date('2024-04-15'));

        render(
            <MockedProvider mocks={errorMocks}>
                <CreateClubCenter />
            </MockedProvider>
        );

        await screen.findAllByText(/Клуб бүртгүүлэх/i);
        await screen.findByText(/Teacher One/i);

        fireEvent.change(screen.getByPlaceholderText(/Wizards Club.../i), {
            target: { value: 'Club', name: 'name' },
        });
        fireEvent.change(screen.getByRole('combobox'), {
            target: { value: '1', name: 'teacher' },
        });
        fireEvent.change(screen.getByPlaceholderText(/Зорилго.../i), {
            target: { value: 'Goal', name: 'goal' },
        });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        const dayBtns = screen
            .getAllByRole('button')
            .filter((b) => b.textContent === '15' && !b.hasAttribute('disabled'));
        if (dayBtns[0]) fireEvent.click(dayBtns[0]);

        fireEvent.click(
            screen.getAllByRole('button').find((b) =>
                b.textContent?.includes('Хүсэлт илгээх')
            )!
        );

        await waitFor(() =>
            expect(window.alert).toHaveBeenCalledWith(
                expect.stringContaining('GraphQL Error')
            )
        );

        jest.useRealTimers();
    });
});
