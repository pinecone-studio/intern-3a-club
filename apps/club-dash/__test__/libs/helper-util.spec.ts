import { getContainerClass } from '../../app/_components/teacher/approved/clubcard/Helper';

describe('getContainerClass', () => {
  it('returns base classes when not primary and not expanded', () => {
    const result = getContainerClass(false, false);
    expect(result).toContain('bg-secondary/40');
    expect(result).not.toContain('border-foreground/20');
  });

  it('returns primary class when primary and not expanded', () => {
    const result = getContainerClass(false, true);
    expect(result).toContain('border-foreground/20');
    expect(result).toContain('bg-secondary/60');
  });

  it('returns expanded bg class and no primary class when expanded', () => {
    const result = getContainerClass(true, true);
    expect(result).toContain('bg-card');
    expect(result).not.toContain('border-foreground/20');
  });
});

