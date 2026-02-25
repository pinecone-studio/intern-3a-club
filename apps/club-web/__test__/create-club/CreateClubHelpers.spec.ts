import {
    calculateTotalMinutes,
    getDayNames,
    getFrequency,
    getMinMax,
} from '../../components/create-club/create-club-helpers';

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
});
