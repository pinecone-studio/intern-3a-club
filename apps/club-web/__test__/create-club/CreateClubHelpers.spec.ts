import {
  calculateTotalMinutes,
  getDayNames,
  getFrequency,
  getMinMax,
  formatDate,
  getStep1Errors,
  getStep2Errors,
  buildMutationVariables,
  handlePreferredToggleHelper,
  getMutationError,
  handleMutationResult,
} from '../../components/create-club/create-club-helpers';
import {
  FormDataType,
  INITIAL_FORM_DATA,
  CreateClubWithSchedulesResponse,
} from '../../components/create-club/types';

// Global window.alert is mocked in jest.setup.ts

describe('CreateClubCenter Helpers', () => {
  test('calculateTotalMinutes', () => {
    expect(calculateTotalMinutes('1:30')).toBe(90);
    expect(calculateTotalMinutes('2:00')).toBe(120);
    expect(calculateTotalMinutes('1')).toBe(60);
    expect(calculateTotalMinutes('0:45')).toBe(45);
  });

  test('getDayNames', () => {
    const dates = [new Date('2024-04-15'), new Date('2024-04-16')];
    const names = getDayNames(dates);
    expect(names).toContain('MONDAY');
    expect(names).toContain('TUESDAY');
    expect(names.length).toBe(2);
  });

  test('getFrequency', () => {
    expect(getFrequency('none')).toBe('ONCE');
    expect(getFrequency('weekly')).toBe('WEEKLY');
    expect(getFrequency('biweekly')).toBe('BIWEEKLY');
  });

  test('getMinMax', () => {
    expect(getMinMax('10')).toBe(10);
    expect(getMinMax('')).toBe(0);
    expect(getMinMax('abc')).toBe(0);
  });

  test('formatDate', () => {
    expect(formatDate(new Date('2024-04-15'))).toBe('2024-04-15');
    expect(formatDate(new Date('2024-12-05'))).toBe('2024-12-05');
  });

  test('getStep1Errors', () => {
    expect(getStep1Errors({ name: '', goal: '' })).toEqual({
      name: 'Заавал',
      goal: 'Заавал',
    });
    expect(getStep1Errors({ name: 'Club', goal: '' })).toEqual({
      goal: 'Заавал',
    });
    expect(getStep1Errors({ name: 'Club', goal: 'Goal' })).toEqual({});
  });

  test('getStep2Errors', () => {
    expect(getStep2Errors({ room: '' })).toEqual({ room: 'Заавал' });
    expect(getStep2Errors({ room: '301' })).toEqual({});
  });

  test('handlePreferredToggleHelper', () => {
    const current = ['1', '2'];
    expect(handlePreferredToggleHelper(current, '3')).toEqual(['1', '2', '3']);
    expect(handlePreferredToggleHelper(current, '1')).toEqual(['2']);
  });

  test('buildMutationVariables', () => {
    const formData: FormDataType = {
      name: 'Club',
      goal: 'Goal',
      teacher: '1',
      preferredTeachers: ['2'],
      minStudents: '10',
      maxStudents: '20',
      room: '301',
      time: '13:00',
      duration: '1:30',
      repeat: 'weekly',
      studentEmail: '',
      startDate: '',
    };
    const selectedDates = [new Date('2024-04-15')];
    const vars = buildMutationVariables(formData, selectedDates);

    expect(vars.input.name).toBe('Club');
    expect(vars.schedules[0].date).toBe('2024-04-15');
    expect(vars.schedules[0].room).toBe('301');
    expect(vars.frequency).toBe('WEEKLY');
    expect(vars.clubTerm).toBe('2024-2025');
  });

  it('covers getMutationError branches', () => {
    expect(getMutationError({})).toBeUndefined();
    expect(getMutationError({ errors: [{ message: 'Err1' }] })).toBe('Err1');
    expect(getMutationError({ error: { message: 'Err2' } })).toBe('Err2');
  });

  it('covers handleMutationResult fallback branches', () => {
    const onSuccess = jest.fn();

    // case null res
    const res1 = handleMutationResult(
      null as unknown as { data?: CreateClubWithSchedulesResponse | null },
      onSuccess
    );
    expect(res1.success).toBe(false);

    // case null data
    const res2 = handleMutationResult({ data: null }, onSuccess);
    expect(res2.success).toBe(false);
    expect(alert).toHaveBeenCalled();
  });

  it('covers buildMutationVariables fallback branch (Line 59)', () => {
    const formData = {
      ...INITIAL_FORM_DATA,
      preferredTeachers: undefined as unknown as string[],
    };
    const vars = buildMutationVariables(formData, []);
    expect(vars.input.preferredTeachers).toEqual([]);
  });
});
