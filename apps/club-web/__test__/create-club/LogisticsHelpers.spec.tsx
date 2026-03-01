import { render, screen, fireEvent, renderHook, act } from '@testing-library/react';
import React from 'react';
import {
    checkEmptyOrSmall,
    checkMinGreater,
    checkEmptyOrLarge,
    checkMaxSmaller,
    StudentCountField,
    useLogisticsForm,
} from '../../components/create-club/LogisticsHelpers';
import { FormDataType } from '../../components/create-club/types';

describe('Logistics Helpers & Hook', () => {
    describe('Validation Functions', () => {
        test('checkEmptyOrSmall', () => {
            expect(checkEmptyOrSmall(0)).toBe(true);
            expect(checkEmptyOrSmall(5)).toBe(true);
            expect(checkEmptyOrSmall(7)).toBe(false);
            expect(checkEmptyOrSmall(10)).toBe(false);
        });

        test('checkMinGreater', () => {
            expect(checkMinGreater(10, 8)).toBe(true);
            expect(checkMinGreater(10, 10)).toBe(true);
            expect(checkMinGreater(8, 10)).toBe(false);
            expect(checkMinGreater(10, 0)).toBe(false);
            expect(checkMinGreater(0, 0)).toBe(false);
        });

        test('checkEmptyOrLarge', () => {
            expect(checkEmptyOrLarge(0)).toBe(true);
            expect(checkEmptyOrLarge(25)).toBe(true);
            expect(checkEmptyOrLarge(20)).toBe(false);
            expect(checkEmptyOrLarge(15)).toBe(false);
        });

        test('checkMaxSmaller', () => {
            expect(checkMaxSmaller(5, 10)).toBe(true);
            expect(checkMaxSmaller(10, 10)).toBe(true);
            expect(checkMaxSmaller(10, 5)).toBe(false);
            expect(checkMaxSmaller(5, 0)).toBe(false);
            expect(checkMaxSmaller(0, 0)).toBe(false);
        });
    });

    describe('StudentCountField', () => {
        test('renders correctly', () => {
            const onChange = jest.fn();
            const onBlur = jest.fn();
            render(
                <StudentCountField
                    label="Test Label"
                    value="10"
                    onChange={onChange}
                    onBlur={onBlur}
                    isInvalid={false}
                    placeholder="Plac"
                />
            );
            expect(screen.getByText('Test Label')).toBeInTheDocument();
            const input = screen.getByPlaceholderText('Plac');
            expect(input).toHaveValue(10);
            fireEvent.change(input, { target: { value: '12' } });
            expect(onChange).toHaveBeenCalled();
        });

        test('shows invalid style', () => {
            render(
                <StudentCountField
                    label="Err Label"
                    value="5"
                    onChange={() => { }}
                    onBlur={() => { }}
                    isInvalid={true}
                    placeholder="P"
                />
            );
            expect(screen.getByText('Err Label')).toHaveClass('text-red-500');
        });
    });

    describe('useLogisticsForm Hook', () => {
        const mockFormData: FormDataType = {
            name: '',
            goal: '',
            teacher: '',
            preferredTeachers: [],
            studentEmail: '',
            repeat: 'none',
            room: '301',
            time: '14:00',
            duration: '2:00',
            minStudents: '10',
            maxStudents: '15',
            startDate: '',
        };
        const setFormData = jest.fn();
        const onRepeatChange = jest.fn();

        test('handles input change', () => {
            const { result } = renderHook(() =>
                useLogisticsForm(mockFormData, setFormData, onRepeatChange)
            );

            act(() => {
                result.current.handleInput('maxStudents')({
                    target: { value: '20' },
                } as unknown as React.ChangeEvent<HTMLInputElement>);
            });

            expect(setFormData).toHaveBeenCalledWith(
                expect.objectContaining({ maxStudents: '20' })
            );
        });

        test('handles blur and validation', () => {
            const { result } = renderHook(({ data }) =>
                useLogisticsForm(data, setFormData, onRepeatChange),
                { initialProps: { data: { ...mockFormData, minStudents: '5' } } }
            );

            expect(result.current.isMinInvalid).toBe(false);

            act(() => {
                result.current.handleMinBlur();
            });

            expect(result.current.isMinInvalid).toBe(true); // min < 7

            // Test min >= max branch
            const { result: r2 } = renderHook(() =>
                useLogisticsForm(
                    { ...mockFormData, minStudents: '20', maxStudents: '15' },
                    setFormData,
                    onRepeatChange
                )
            );
            act(() => { r2.current.handleMinBlur(); });
            expect(r2.current.isMinInvalid).toBe(true); // min > max
        });

        test('handles max validation branches', () => {
            const { result } = renderHook(() =>
                useLogisticsForm(
                    { ...mockFormData, maxStudents: '25', minStudents: '10' },
                    setFormData,
                    onRepeatChange
                )
            );
            act(() => { result.current.handleMaxBlur(); });
            expect(result.current.isMaxInvalid).toBe(true); // max > 20

            const { result: r2 } = renderHook(() =>
                useLogisticsForm(
                    { ...mockFormData, maxStudents: '8', minStudents: '10' },
                    setFormData,
                    onRepeatChange
                )
            );
            act(() => { r2.current.handleMaxBlur(); });
            expect(r2.current.isMaxInvalid).toBe(true); // max < min
        });

        test('handles repeat change', () => {
            const { result } = renderHook(() =>
                useLogisticsForm(mockFormData, setFormData, onRepeatChange)
            );

            act(() => {
                result.current.handleRepeatChange('weekly');
            });

            expect(onRepeatChange).toHaveBeenCalledWith('weekly');
            expect(setFormData).toHaveBeenCalledWith(
                expect.objectContaining({ repeat: 'weekly' })
            );
        });

        test('bind function', () => {
            const { result } = renderHook(() =>
                useLogisticsForm(mockFormData, setFormData, onRepeatChange)
            );

            act(() => {
                result.current.bind('room')('302');
            });

            expect(setFormData).toHaveBeenCalledWith(
                expect.objectContaining({ room: '302' })
            );
        });
    });
});
