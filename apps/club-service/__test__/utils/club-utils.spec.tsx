import * as clubUtils from 'gql-utils/club';

describe('Club Utils Comprehensive Tests', () => {
  describe('resolveStatus', () => {
    it('should return approved if teacherId is provided', () => {
      expect(clubUtils.resolveStatus('teacher-1')).toBe('approved');
    });
    it('should return pending if teacherId is missing', () => {
      expect(clubUtils.resolveStatus(undefined)).toBe('pending');
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
      expect(clubUtils.resolveType(undefined, undefined)).toBe('self');
    });
  });

  describe('resolveFrequency', () => {
    it('should return ONCE for valid input', () => {
      expect(clubUtils.resolveFrequency('ONCE')).toBe('ONCE');
    });
    it('should return WEEKLY for valid input', () => {
      expect(clubUtils.resolveFrequency('WEEKLY')).toBe('WEEKLY');
    });
    it('should throw an error for invalid input', () => {
      expect(() => clubUtils.resolveFrequency('DAILY')).toThrow(
        'Invalid frequency: DAILY'
      );
    });
  });

  describe('resolveMemberLimits', () => {
    it('should resolve max members with default 0', () => {
      expect(clubUtils.resolveMaxMember(10)).toBe(10);
      expect(clubUtils.resolveMaxMember(undefined)).toBe(0);
    });
    it('should resolve min members with default 0', () => {
      expect(clubUtils.resolveMinMember(2)).toBe(2);
      expect(clubUtils.resolveMinMember(undefined)).toBe(0);
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

  describe('resolveTeacherId', () => {
    it('should return teacherId or null', () => {
      expect(clubUtils.resolveTeacherId('t1')).toBe('t1');
      expect(clubUtils.resolveTeacherId(undefined)).toBeNull();
    });
  });

  describe('resolveTerm', () => {
    it('should return term or null', () => {
      expect(clubUtils.resolveTerm('1')).toBe('1');
      expect(clubUtils.resolveTerm(undefined)).toBeNull();
    });
  });
});
