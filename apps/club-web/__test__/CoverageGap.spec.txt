/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-explicit-any */
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';
import { ClubForm } from '../components/create-club/ClubForm';
import { ClubFormHelp } from '../components/create-club/ClubFormHelp';
import { LogisticsForm } from '../components/create-club/LogisticsForm';
import { PreferredTeacherList } from '../components/create-club/PreferredTeacherList';
import { Step1 } from '../components/create-club/Step1';
import { CreateClubCenter } from '../components/create-club/CreateClubCenter';
import { INITIAL_FORM_DATA } from '../components/create-club/types';
import { buildMutationVariables } from '../components/create-club/create-club-helpers';
import React from 'react';
import '@testing-library/jest-dom';
import * as Apollo from '@apollo/client/react';

// Mock Apollo hooks at the module level so all component imports resolve the mocked version
jest.mock('@apollo/client/react', () => ({
    ...jest.requireActual('@apollo/client/react'),
    useQuery: jest.fn(),
    useMutation: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => {
    const ReactMock = require('react');
    return {
        motion: {
            div: ReactMock.forwardRef(({ children, ...props }: any, ref: any) => (
                <div {...props} ref={ref}>{children}</div>
            )),
            section: ReactMock.forwardRef(({ children, ...props }: any, ref: any) => (
                <section {...props} ref={ref}>{children}</section>
            )),
        },
        AnimatePresence: ({ children }: any) => <>{children}</>,
    };
});

const mockTeachers = [
    { id: '1', firstName: 'T1', lastName: 'L1', profilePicture: '' }
];

const mockClubs = [
    { id: '1', name: 'Club 1', description: 'Desc', teacherId: '1', type: 'mentor', status: 'Open', minMember: 1, maxMember: 10, timetables: [], bannedUntil: 0 }
];

const defaultQueryReturn = { loading: false, error: null, data: { getAllClubs: mockClubs, getAllTeachers: mockTeachers } };
const defaultMutationReturn = [jest.fn(), { loading: false, error: null }];

// TypeScript requires double cast since jest.Mock doesn't overlap with Apollo types
const mockUseQuery = () => Apollo.useQuery as unknown as jest.Mock;
const mockUseMutation = () => Apollo.useMutation as unknown as jest.Mock;

beforeEach(() => {
    jest.clearAllMocks();
    mockUseQuery().mockReturnValue(defaultQueryReturn);
    mockUseMutation().mockReturnValue(defaultMutationReturn);
});

afterEach(() => {
    cleanup();
});


describe('ClubsContent coverage', () => {
    it('error state (line 94)', () => {
        mockUseQuery().mockReturnValue({ loading: false, error: new Error('Mock Error'), data: null });
        render(<ClubsContent />);
        expect(screen.getByText(/Mock Error/i)).toBeInTheDocument();
    });

    it('bannedUntil fallback — undefined maps to 0 (line 80 null coalescing)', () => {
        const clubs = [{ ...mockClubs[0], bannedUntil: undefined }];
        mockUseQuery().mockReturnValue({ loading: false, error: null, data: { getAllClubs: clubs } });
        render(<ClubsContent />);
        expect(screen.getAllByText(/Club 1/i).length).toBeGreaterThan(0);
    });

    it('bannedUntil > now causes isLocked=true (line 80 true-branch)', () => {
        // bannedUntil set to far future so (bannedUntil ?? 0) > now is true
        const clubs = [{ ...mockClubs[0], bannedUntil: Date.now() + 9999999 }];
        mockUseQuery().mockReturnValue({ loading: false, error: null, data: { getAllClubs: clubs } });
        render(<ClubsContent />);
        expect(screen.getAllByText(/Club 1/i).length).toBeGreaterThan(0);
    });
});

describe('ClubForm coverage', () => {
    it('help toggle covers showHelp branch', () => {
        const mockSubmit = jest.fn().mockResolvedValue({ success: true, message: 'OK' });
        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'N', goal: 'G' }}
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
        // toggle help (lines 70-76 via toggleHelp)
        fireEvent.click(screen.getByText(/Тусламж/i));
        expect(screen.getByText(/Хаах/i)).toBeInTheDocument();
    });

    it('step2 and submit with no room errors (line 73-79)', async () => {
        const mockSubmit = jest.fn().mockResolvedValue({ success: true, message: 'Done' });
        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'N', goal: 'G', room: '301' }}
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
        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(mockSubmit).toHaveBeenCalled());
    });

    it('step2 with validation errors (lines 70-76 error branch)', async () => {
        const mockSubmit = jest.fn().mockResolvedValue({ success: true, message: 'Done' });
        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'N', goal: 'G', room: '' }}
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
        // Submit without a room — getStep2Errors returns errors, so handleSubmit is NOT called
        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(mockSubmit).not.toHaveBeenCalled());
    });

    it('step1 validation errors — false branch of setStep(2) (line 70)', () => {
        // Click next with empty name and goal — getStep1Errors returns errors so step stays at 1
        const mockSubmit = jest.fn().mockResolvedValue({ success: false, message: '' });
        render(
            <ClubForm
                formData={INITIAL_FORM_DATA}
                setFormData={() => { }}
                selectedDates={[]}
                setSelectedDates={() => { }}
                currentMonth={new Date()}
                handleMonthChange={() => { }}
                renderCalendarDays={() => []}
                handleSubmit={mockSubmit}
                teachers={mockTeachers as any}
            />
        );
        // Click next without filling name/goal — step stays at 1 (setStep(2) NOT called)
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
        // Should still show step 1 button (not step 2 submit)
        expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
    });

    it('onBack returns to step 1 from step 2 (covers onBack function)', () => {
        const mockSubmit = jest.fn().mockResolvedValue({ success: true, message: 'OK' });
        render(
            <ClubForm
                formData={{ ...INITIAL_FORM_DATA, name: 'N', goal: 'G', room: '301' }}
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
        expect(screen.getByText(/Хүсэлт илгээх/i)).toBeInTheDocument();
        // Go back to step 1
        fireEvent.click(screen.getByText(/Буцах/i));
        expect(screen.getByText(/Үргэлжлүүлэх/i)).toBeInTheDocument();
    });
});

describe('CreateClubCenter coverage', () => {
    it('validation alert when no dates (lines 107-108)', async () => {
        render(<CreateClubCenter />);
        // fill required step1 fields
        fireEvent.change(screen.getByLabelText(/Клубын нэр/i), { target: { value: 'N', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), { target: { value: 'G', name: 'goal' } });
        // proceed to step 2
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));
        // submit without selecting a date
        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Огноо сонгоно уу'));
    });

    it('handleReset called on successful mutation (lines 84-87)', async () => {
        const mockMutate = jest.fn().mockResolvedValue({
            data: { createClubWithSchedules: { id: '1', name: 'N' } }
        });
        mockUseMutation().mockReturnValue([mockMutate, { loading: false, error: null }]);

        render(<CreateClubCenter />);
        fireEvent.change(screen.getByLabelText(/Клубын нэр/i), { target: { value: 'N', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), { target: { value: 'G', name: 'goal' } });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        // select a date from the calendar
        const day = screen.getAllByRole('button').find(b => /^\d+$/.test(b.textContent || ''));
        if (day) fireEvent.click(day);

        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith('Клуб амжилттай үүслээ'));
    });

    it('error catch with message (lines 99-101)', async () => {
        const mockMutate = jest.fn().mockRejectedValue(new Error('Mutation Fail'));
        mockUseMutation().mockReturnValue([mockMutate, { loading: false, error: null }]);

        render(<CreateClubCenter />);
        fireEvent.change(screen.getByLabelText(/Клубын нэр/i), { target: { value: 'N', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), { target: { value: 'G', name: 'goal' } });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        const day = screen.getAllByRole('button').find(b => /^\d+$/.test(b.textContent || ''));
        if (day) fireEvent.click(day);

        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Mutation Fail')));
    });

    it('error catch without message falls back (line 99 || branch)', async () => {
        // Throw an object that has no .message property to cover the || 'Алдаа гарлаа' branch
        const mockMutate = jest.fn().mockRejectedValue({ code: 42 });
        mockUseMutation().mockReturnValue([mockMutate, { loading: false, error: null }]);

        render(<CreateClubCenter />);
        fireEvent.change(screen.getByLabelText(/Клубын нэр/i), { target: { value: 'N', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Клубын зорилго/i), { target: { value: 'G', name: 'goal' } });
        fireEvent.click(screen.getByText(/Үргэлжлүүлэх/i));

        const day = screen.getAllByRole('button').find(b => /^\d+$/.test(b.textContent || ''));
        if (day) fireEvent.click(day);

        fireEvent.click(screen.getAllByRole('button').find(b => b.textContent?.includes('Хүсэлт илгээх'))!);
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith(expect.stringContaining('Алдаа гарлаа')));
    });
});

describe('Step1 coverage', () => {
    it('returns null when formData is null (line 69)', () => {
        const { container } = render(<Step1 formData={null as any} setFormData={() => { }} />);
        expect(container.firstChild).toBeNull();
    });

    it('student email input and error styling (lines 72-76)', () => {
        render(
            <Step1
                formData={{ ...INITIAL_FORM_DATA, teacher: 'student' }}
                setFormData={() => { }}
                errors={{ name: 'err' }}
            />
        );
        expect(screen.getByTestId('student-email-input')).toBeInTheDocument();
        expect(screen.getByLabelText(/Клубын нэр/i)).toHaveClass('border-red-500/50');
    });
});

describe('Miscellaneous coverage', () => {
    it('ClubFormHelp renders when showHelp=true', () => {
        render(<ClubFormHelp showHelp={true} />);
        expect(screen.getByText(/Клуб нээхдээ дараах зүйлсийг гүйцээнэ/i)).toBeInTheDocument();
    });

    it('LogisticsForm onRepeatChange fires', () => {
        const onRepeatChange = jest.fn();
        render(<LogisticsForm formData={INITIAL_FORM_DATA} setFormData={() => { }} onRepeatChange={onRepeatChange} errors={{}} />);
        fireEvent.change(screen.getByLabelText(/Давтамж/i), { target: { value: 'weekly' } });
        expect(onRepeatChange).toHaveBeenCalled();
    });

    it('PreferredTeacherList empty state', () => {
        render(<PreferredTeacherList teachers={[]} selectedIds={[]} onToggle={() => { }} />);
        expect(screen.getByText(/Багшийн мэдээлэл олдсонгүй/i)).toBeInTheDocument();
    });

    it('buildMutationVariables student branch (line 57)', () => {
        const vars = buildMutationVariables({ ...INITIAL_FORM_DATA, teacher: 'student' }, [new Date()]);
        expect(vars.input.teacherId).toBeNull();
    });
});
