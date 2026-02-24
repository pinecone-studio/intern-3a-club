import * as clubUtils from 'gql-utils/club';
import { CreateClubWithSchedulesArgs } from 'gql-type';

describe('Club Utils Comprehensive Tests', () => {
  describe('resolveStatus', () => {
    it('should return approved if teacherId is provided', () => {
      expect(clubUtils.resolveStatus('teacher-1')).toBe('approved');
    });
    it('should return pending if teacherId is missing', () => {
      expect(clubUtils.resolveStatus()).toBe('pending');
    });
  });

  describe('resolveType', () => {
    it('should return provided type if it exists', () => {
      expect(clubUtils.resolveType('hobby', 'teacher-1')).toBe('hobby');
    });
    it('should return mentor if type is missing but teacherId exists', () => {
      expect(clubUtils.resolveType(undefined, 'teacher-1')).toBe('mentor');
    });
    it('should return self if both are missing', () => {
      expect(clubUtils.resolveType()).toBe('self');
    });
  });

  describe('getNextDateOfDay (Date Utils)', () => {
    it('should calculate the next occurrence of a day correctly', () => {
      // 2026-02-24 нь Мягмар (Tuesday)
      const startDate = '2026-02-24';
      // Дараагийн Лхагва (Wednesday) гарагийг олох
      const result = clubUtils.getNextDateOfDay(startDate, 'Wednesday');
      expect(result).toBe('2026-02-25');
    });

    it('should return same day if target day is the start date', () => {
      const result = clubUtils.getNextDateOfDay('2026-02-24', 'Tuesday');
      expect(result).toBe('2026-02-24');
    });
  });

  describe('resolveMemberLimits', () => {
    it('should resolve min and max members with default 0', () => {
      expect(clubUtils.resolveMaxMember(10)).toBe(10);
      expect(clubUtils.resolveMaxMember()).toBe(0);
      expect(clubUtils.resolveMinMember(2)).toBe(2);
      expect(clubUtils.resolveMinMember()).toBe(0);
    });
  });

  describe('resolvePreferredTeachers', () => {
    it('should return null if teacherId is provided', () => {
      expect(clubUtils.resolvePreferredTeachers('t1', ['t2'])).toBeNull();
    });
    it('should return preferred list if teacherId is missing', () => {
      const preferred = ['t2', 't3'];
      expect(clubUtils.resolvePreferredTeachers(undefined, preferred)).toEqual(
        preferred
      );
    });
  });

  describe('resolveSchedules', () => {
    const commonArgs: Partial<CreateClubWithSchedulesArgs> = {
      startDate: '2026-02-24',
      classroom: '301',
      startTime: '13:00',
      duration: 60,
    };

    beforeEach(() => {
      // UUID mock хийх
      global.crypto.randomUUID = jest.fn().mockReturnValue('mock-uuid');
    });

    it('should return single schedule for ONCE frequency', () => {
      const args = {
        ...commonArgs,
        frequency: 'ONCE',
      } as CreateClubWithSchedulesArgs;
      const result = clubUtils.resolveSchedules(args, 'club-1');

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        date: '2026-02-24',
        room: '301',
        clubId: 'club-1',
      });
    });

    it('should return multiple schedules for recurring days', () => {
      const args = {
        ...commonArgs,
        frequency: 'WEEKLY',
        selectedDays: ['Monday', 'Friday'],
      } as CreateClubWithSchedulesArgs;

      const result = clubUtils.resolveSchedules(args, 'club-1');

      expect(result).toHaveLength(2);
      expect(result[0].date).toBeDefined(); // getNextDateOfDay-ээр тооцоологдсон утга
    });

    it('should return single schedule if selectedDays is empty', () => {
      const args = {
        ...commonArgs,
        frequency: 'WEEKLY',
        selectedDays: [],
      } as CreateClubWithSchedulesArgs;
      const result = clubUtils.resolveSchedules(args, 'club-1');
      expect(result).toHaveLength(1);
    });
  });

  describe('resolveTeacherId', () => {
    it('should return teacherId or null', () => {
      expect(clubUtils.resolveTeacherId('t1')).toBe('t1');
      expect(clubUtils.resolveTeacherId(undefined)).toBeNull();
    });
  });
});
