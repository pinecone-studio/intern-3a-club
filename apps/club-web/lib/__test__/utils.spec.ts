import { cn } from '../utils';

describe('utils cn', () => {
  it('should join class names correctly', () => {
    expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
    expect(cn('btn', { 'btn-active': true, 'btn-disabled': false })).toBe('btn btn-active');
    expect(cn(['a', 'b'], 'c')).toBe('a b c');
    expect(cn(null, undefined, false, 'valid')).toBe('valid');
  });
});