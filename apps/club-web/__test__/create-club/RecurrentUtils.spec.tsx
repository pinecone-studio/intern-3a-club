import {
  isWeeklyMatch,
  isMonthlyMatch,
  isBiweeklyMatch,
  checkDateMatch,
  generateDates,
} from '../../components/create-club/RecurrentUtils';

describe('Recurrent Utils Logic Deep Scan', () => {
  it('covers all branches and loops in RecurrentUtils', () => {
    const anchor = new Date('2024-05-01');
    anchor.setHours(0, 0, 0, 0);
    const anchorTime = anchor.getTime();

    const monday = new Date('2024-05-06');
    expect(isBiweeklyMatch(monday, [3], anchorTime)).toBe(false);

    const twoWeeksLater = new Date('2024-05-15');
    expect(isBiweeklyMatch(twoWeeksLater, [3], anchorTime)).toBe(true);

    expect(isWeeklyMatch(anchor, [3])).toBe(true);
    expect(isWeeklyMatch(anchor, [1])).toBe(false);
    expect(isMonthlyMatch(anchor, [1])).toBe(true);

    const config = { weekDays: [3], dayNumbers: [1], anchorTime };
    const todayDate = new Date('2024-04-01');

    expect(
      generateDates(2024, 4, todayDate, 'weekly', config).length
    ).toBeGreaterThan(0);
    expect(
      generateDates(2024, 4, todayDate, 'biweekly', config).length
    ).toBeGreaterThan(0);
    expect(
      generateDates(2024, 4, todayDate, 'monthly', config).length
    ).toBeGreaterThan(0);
    expect(checkDateMatch(anchor, 'invalid', config)).toBe(false);
  });

  it('covers null/empty branches in utils (Line 33-34)', () => {
    const d = new Date();
    // @ts-expect-error: Testing edge case with null value
    expect(isWeeklyMatch(d, null)).toBe(false);
    // @ts-expect-error: Testing edge case with null value
    expect(isMonthlyMatch(d, null)).toBe(false);
    // @ts-expect-error: Testing edge case with null value
    expect(isBiweeklyMatch(d, null, d.getTime())).toBe(false);
  });
});
