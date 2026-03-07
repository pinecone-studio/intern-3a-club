import { DB } from 'db/drizzle';
import * as clubUtils from 'gql-utils/club';
import { getCreatorId } from 'gql-utils/user/user.util';

// 1. Drizzle DB Mock
jest.mock('db/drizzle', () => ({
  DB: { select: jest.fn() },
}));

// Helper Type
type MockChain = {
  from: jest.Mock;
  where: jest.Mock;
  get: jest.Mock;
};

// Helper function: any-гүй, цэвэрхэн mock үүсгэх
const createMockDbChain = (returnValue: unknown): MockChain => ({
  from: jest.fn().mockReturnThis(),
  where: jest.fn().mockReturnThis(),
  get: jest.fn().mockResolvedValue(returnValue),
});

const mockedDB = DB as jest.Mocked<typeof DB>;

describe('User Utility - getCreatorId', () => {
  beforeEach(() => jest.clearAllMocks());

  it('Багш болон сурагчийн ID-г хайж олох логик', async () => {
    // 1. Багш олдсон үед
    (mockedDB.select as jest.Mock).mockReturnValue(
      createMockDbChain({ id: 't1' })
    );
    expect(await getCreatorId('u1')).toBe('t1');

    // 2. Багш олдохгүй, сурагч олдсон үед
    (mockedDB.select as jest.Mock)
      .mockReturnValueOnce(createMockDbChain(null))
      .mockReturnValueOnce(createMockDbChain({ id: 's1' }));
    expect(await getCreatorId('u2')).toBe('s1');

    // 3. Аль нь ч олдохгүй үед
    (mockedDB.select as jest.Mock).mockReturnValue(createMockDbChain(null));
    expect(await getCreatorId('u3')).toBeNull();
  });
});

describe('Preferred Teacher Utility - 100% Coverage', () => {
  it('resolvePreferredTeachers: салбаруудыг нөхөх (Line 9)', () => {
    // Branch 9 (True): teacherIdOrPreferred нь массив биш (string) үед maybePreferred-ийг авах
    const fromMaybe = clubUtils.resolvePreferredTeachers('teacher-id', [
      'p1',
      'p2',
    ]);
    expect(fromMaybe).toEqual(['p1', 'p2']);

    // Branch 9 (False): Эхний аргумент нь массив байх үед
    expect(clubUtils.resolvePreferredTeachers(['p3'])).toEqual(['p3']);

    const mixed = [' t1 ', 123, null, ' t1 '] as unknown as string[];
    expect(clubUtils.resolvePreferredTeachers(mixed)).toEqual(['t1']);

    // Undefined нөхцөл
    expect(clubUtils.resolvePreferredTeachers(undefined, undefined)).toEqual(
      []
    );
  });
});

describe('Other Club Property Resolvers', () => {
  it('type.util: mentor болон self салбарыг нөхөх (Line 2)', () => {
    // teacherId байхгүй бол 'self'
    expect(clubUtils.resolveType(undefined, undefined)).toBe('self');
    // teacherId байгаа бол 'mentor'
    expect(clubUtils.resolveType(undefined, 'teacher-id')).toBe('mentor');
    expect(clubUtils.resolveType('hobby', 'teacher-id')).toBe('hobby');
  });

  it('limits, status, term: fallback утгуудыг нөхөх', () => {
    // min/max member fallback (Line 1)
    expect(clubUtils.resolveMinMember(undefined)).toBe(0);
    expect(clubUtils.resolveMaxMember(undefined)).toBe(0);

    // Status
    expect(clubUtils.resolveStatus(undefined)).toBe('pending');
    expect(clubUtils.resolveStatus('t1')).toBe('approved');

    // Term and TeacherId
    expect(clubUtils.resolveTerm(undefined)).toBeNull();
    expect(clubUtils.resolveTeacherId(undefined)).toBeNull();
  });
});

describe('Dates and Frequency Utilities', () => {
  it('date resolvers: эхлэл ба төгсгөл огноо', () => {
    const dates = [{ date: '2026-05-20' }, { date: '2026-03-15' }];
    expect(clubUtils.resolveStartDate(dates)).toBe('2026-03-15');
    expect(clubUtils.resolveEndDate(dates)).toBe('2026-05-20');
    expect(clubUtils.resolveStartDate([])).toBeNull();
    expect(clubUtils.resolveEndDate([])).toBeNull();
  });

  it('frequency: resolve болон normalize хийх', () => {
    expect(clubUtils.resolveFrequency('ONCE')).toBe('ONCE');

    // throw Error branch
    const invalid = 'DAILY' as unknown as 'ONCE';
    expect(() => clubUtils.resolveFrequency(invalid)).toThrow();

    expect(clubUtils.normalizeFrequency(null)).toBe('WEEKLY');
    expect(clubUtils.normalizeFrequency('  once  ')).toBe('ONCE');
  });
});
