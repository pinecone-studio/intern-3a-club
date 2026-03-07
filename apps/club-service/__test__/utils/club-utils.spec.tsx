import * as clubUtils from 'gql-utils/club';
import { DB } from 'db/drizzle';
import { getCreatorId } from 'gql-utils/user/user.util';

// 1. Drizzle DB-г mock хийх
jest.mock('db/drizzle', () => ({
  DB: {
    select: jest.fn(),
  },
}));

// Mock хэлхээг (chain) төрөлжүүлж дуурайх функц
const mockDbChain = (returnValue: unknown) => ({
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  get: jest.fn().mockResolvedValue(returnValue),
});

const mockedDB = DB as jest.Mocked<typeof DB>;

describe('user.util.ts 100% Coverage', () => {
  const mockClerkId = 'clerk_123';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Хэрэв багш олдвол teacher.id-г буцаах ёстой', async () => {
    const mockTeacher = { id: 'teacher_001' };
    (mockedDB.select as jest.Mock).mockReturnValue(mockDbChain(mockTeacher));

    const result = await getCreatorId(mockClerkId);

    expect(result).toBe('teacher_001');
    expect(mockedDB.select).toHaveBeenCalledTimes(1);
  });

  it('Багш олдохгүй, харин сурагч олдвол student.id-г буцаах ёстой', async () => {
    const mockStudent = { id: 'student_002' };
    (mockedDB.select as jest.Mock)
      .mockReturnValueOnce(mockDbChain(null))
      .mockReturnValueOnce(mockDbChain(mockStudent));

    const result = await getCreatorId(mockClerkId);

    expect(result).toBe('student_002');
    expect(mockedDB.select).toHaveBeenCalledTimes(2);
  });

  it('Багш болон сурагч аль аль нь олдохгүй бол null буцаах ёстой', async () => {
    (mockedDB.select as jest.Mock)
      .mockReturnValueOnce(mockDbChain(null))
      .mockReturnValueOnce(mockDbChain(null));

    const result = await getCreatorId(mockClerkId);

    expect(result).toBeNull();
  });
});

describe('date.utils.ts 100% Coverage', () => {
  describe('resolveStartDate', () => {
    it('Хуваарь хоосон бол null буцаах ёстой', () => {
      expect(clubUtils.resolveStartDate([])).toBeNull();
      // @ts-expect-error: Testing runtime safety
      expect(clubUtils.resolveStartDate(null)).toBeNull();
    });

    it('Хамгийн эртний огноог (start date) буцаах ёстой', () => {
      const schedules = [
        { date: '2026-05-20' },
        { date: '2026-03-15' },
        { date: '2026-04-01' },
      ];
      expect(clubUtils.resolveStartDate(schedules)).toBe('2026-03-15');
    });
  });

  describe('resolveEndDate', () => {
    it('Хуваарь хоосон бол null буцаах ёстой', () => {
      expect(clubUtils.resolveEndDate([])).toBeNull();
    });

    it('Хамгийн сүүлийн огноог (end date) буцаах ёстой', () => {
      const schedules = [
        { date: '2026-05-20' },
        { date: '2026-03-15' },
        { date: '2026-04-01' },
      ];
      expect(clubUtils.resolveEndDate(schedules)).toBe('2026-05-20');
    });
  });
});

describe('Existing Club Utils (100% Coverage Support)', () => {
  describe('resolveFrequency', () => {
    it('should return valid frequency or throw error', () => {
      expect(clubUtils.resolveFrequency('ONCE')).toBe('ONCE');
      expect(() => clubUtils.resolveFrequency('DAILY' as any)).toThrow();
    });
  });

  describe('normalizeFrequency', () => {
    it('should return ONCE for "once" and WEEKLY for others', () => {
      expect(clubUtils.normalizeFrequency('once')).toBe('ONCE');
      expect(clubUtils.normalizeFrequency(null)).toBe('WEEKLY');
      expect(clubUtils.normalizeFrequency(undefined)).toBe('WEEKLY');
    });
  });

  describe('resolvePreferredTeachers', () => {
    it('should handle array and string inputs', () => {
      expect(clubUtils.resolvePreferredTeachers(['t1'])).toEqual(['t1']);
      expect(clubUtils.resolvePreferredTeachers('t1', ['t2'])).toEqual(['t2']);
      expect(clubUtils.resolvePreferredTeachers(undefined, undefined)).toEqual(
        []
      );
    });

    it('should filter mixed types and duplicates', () => {
      const mixed = ['t1', 123, null, 't1', ' t2 '];
      expect(clubUtils.resolvePreferredTeachers(mixed as any)).toEqual([
        't1',
        't2',
      ]);
    });
  });

  describe('resolveStatus and resolveType', () => {
    it('should return correct status', () => {
      expect(clubUtils.resolveStatus('id')).toBe('approved');
      expect(clubUtils.resolveStatus(undefined)).toBe('pending');
    });

    it('should return correct type', () => {
      expect(clubUtils.resolveType('hobby', 'id')).toBe('hobby');
      expect(clubUtils.resolveType(undefined, 'id')).toBe('mentor');
      expect(clubUtils.resolveType(undefined, undefined)).toBe('self');
    });
  });

  describe('resolveMemberLimits', () => {
    it('should return value or 0', () => {
      expect(clubUtils.resolveMaxMember(10)).toBe(10);
      expect(clubUtils.resolveMaxMember(undefined)).toBe(0);
      expect(clubUtils.resolveMinMember(5)).toBe(5);
      expect(clubUtils.resolveMinMember(undefined)).toBe(0);
    });
  });

  describe('resolveTeacherId and resolveTerm', () => {
    it('should return value or null', () => {
      expect(clubUtils.resolveTeacherId('t1')).toBe('t1');
      expect(clubUtils.resolveTeacherId(undefined)).toBeNull();
      expect(clubUtils.resolveTerm('term1')).toBe('term1');
      expect(clubUtils.resolveTerm(undefined)).toBeNull();
    });
  });
});
