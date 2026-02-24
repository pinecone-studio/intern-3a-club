import { cn } from '../utils';

describe('utils/cn', () => {
    it('should merge class names correctly', () => {
        expect(cn('a', 'b')).toBe('a b');
        expect(cn('a', { b: true, c: false })).toBe('a b');
        expect(cn('a', ['b', 'c'])).toBe('a b c');
        expect(cn('a', null, undefined, false, 0, '')).toBe('a');
        expect(cn('a', [['b'], { c: true }])).toBe('a b c');
    });
});
