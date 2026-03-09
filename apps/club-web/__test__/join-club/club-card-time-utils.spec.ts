import { ApprovedClubTimetable } from '../../lib/type';

jest.mock('../../app/JoinClub/_components/utils/clubs-utils', () => ({
  toStartTimestamp: jest.fn(),
  diffToTimeLeft: jest.fn((ms: number) => `${Math.floor(ms / 60000)} минут`),
}));

import { toStartTimestamp } from '../../app/JoinClub/_components/utils/clubs-utils';
import { getTimeLeftText } from 'apps/club-web/app/JoinClub/_components/utils/club-card-time-utils';

const mockTimetable = {
  date: '2026-03-20',
  clubStartTime: '18:00',
} as ApprovedClubTimetable;

describe('getTimeLeftText', () => {
  beforeEach(() => jest.clearAllMocks());

  it('timetable undefined үед null буцаана', () => {
    expect(getTimeLeftText(undefined)).toBeNull();
  });

  it('date байхгүй үед null буцаана', () => {
    expect(
      getTimeLeftText({ clubStartTime: '18:00' } as ApprovedClubTimetable)
    ).toBeNull();
  });

  it('clubStartTime байхгүй үед null буцаана', () => {
    expect(
      getTimeLeftText({ date: '2026-03-20' } as ApprovedClubTimetable)
    ).toBeNull();
  });

  it('toStartTimestamp null буцаавал null буцаана', () => {
    (toStartTimestamp as unknown as jest.Mock).mockReturnValue(null);
    expect(getTimeLeftText(mockTimetable)).toBeNull();
  });

  it('diff <= 0 үед null буцаана', () => {
    (toStartTimestamp as unknown as jest.Mock).mockReturnValue(
      Date.now() - 1000
    );
    expect(getTimeLeftText(mockTimetable)).toBeNull();
  });

  it('diff > 0 үед timeLeft текст буцаана', () => {
    (toStartTimestamp as unknown as jest.Mock).mockReturnValue(
      Date.now() + 60000
    );
    const result = getTimeLeftText(mockTimetable);
    expect(result).not.toBeNull();
    expect(typeof result).toBe('string');
  });
});
