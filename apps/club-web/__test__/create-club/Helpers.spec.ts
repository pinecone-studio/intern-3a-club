import {
    calculateTotalMinutes,
    getDayNames,
    getFrequency,
    getMinMax,
    formatDate,
    getStep1Errors,
    getStep2Errors,
    getMutationError,
    handleMutationResult
} from '../../components/create-club/create-club-helpers';

describe('create-club-helpers Unit Tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        window.alert = jest.fn();
    });

    it('covers missing branches in helpers', () => {
        // calculateTotalMinutes fallback
        expect(calculateTotalMinutes('1')).toBe(60);
        expect(calculateTotalMinutes('1:30')).toBe(90);

        // getDayNames
        const d = new Date('2024-04-15');
        expect(getDayNames([d])).toContain('MONDAY');

        // formatDate
        expect(formatDate(d)).toBe('2024-04-15');

        // getMinMax fallback
        expect(getMinMax('')).toBe(0);
        expect(getMinMax('20')).toBe(20);

        // getStep1Errors 
        expect(getStep1Errors({})).toEqual({ name: 'Заавал', goal: 'Заавал' });
        expect(getStep1Errors({ name: 'N', goal: 'G' })).toEqual({});

        // getStep2Errors 
        expect(getStep2Errors({})).toEqual({ room: 'Заавал' });
        expect(getStep2Errors({ room: '301' })).toEqual({});

        // getFrequency
        expect(getFrequency('none')).toBe('ONCE');
        expect(getFrequency('weekly')).toBe('WEEKLY');

        // getMutationError branches
        expect(getMutationError({ errors: [{ message: 'Err' }] })).toBe('Err');
        expect(getMutationError({ error: { message: 'Err2' } })).toBe('Err2');
        expect(getMutationError({})).toBeUndefined();

        // handleMutationResult branches
        const mockAlert = window.alert as jest.Mock;

        // Error path
        handleMutationResult({ error: { message: 'X' } }, () => { });
        expect(mockAlert).toHaveBeenCalledWith('Алдаа гарлаа: X');

        // Success path
        const onSuccess = jest.fn();
        handleMutationResult({ data: { createClubWithSchedules: { id: '1' } } }, onSuccess);
        expect(onSuccess).toHaveBeenCalled();

        // Fallback path
        handleMutationResult({}, () => { });
        expect(mockAlert).toHaveBeenCalledWith('Клуб үүссэн эсэх тодорхойгүй.');
    });
});
