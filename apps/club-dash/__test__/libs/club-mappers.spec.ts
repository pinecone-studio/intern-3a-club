import {
  mapGetAllClubToClub,
  mapGetAllClubsToClubs,
} from '../../libs/club-mappers';
import type { GetAllClub } from '../../libs/types';

const mockGetAllClub: GetAllClub = {
  id: '1',
  name: 'Test Club',
  description: 'A description',
  creatorId: 'c1',
  teacherId: 't1',
  type: 'club',
  status: 'approved',
  preferredTeachers: null,
  minMember: 5,
  maxMember: 10,
  timetables: [
    {
      id: 'tt1',
      clubId: '1',
      date: '2025-01-01',
      room: '101',
      clubStartTime: '10:00',
      duration: 60,
    },
  ],
};

describe('mapGetAllClubToClub', () => {
  it('maps a single GetAllClub to Club', () => {
    const result = mapGetAllClubToClub(mockGetAllClub);
    expect(result.id).toBe('1');
    expect(result.name).toBe('Test Club');
    expect(result.description).toBe('A description');
    expect(result.teacherId).toBe('t1');
    expect(result.minMember).toBe(5);
    expect(result.maxMember).toBe(10);
    expect(result.status).toBe('approved');
    expect(result.timetables).toHaveLength(1);
    expect(result.timetables[0].room).toBe('101');
    expect(result.timetables[0].clubStartTime).toBe('10:00');
  });

  it('maps null description and teacherId to null', () => {
    const withNulls = {
      ...mockGetAllClub,
      description: null as unknown as string,
      teacherId: null as unknown as string,
    };
    const result = mapGetAllClubToClub(withNulls);
    expect(result.description).toBeNull();
    expect(result.teacherId).toBeNull();
  });
});

describe('mapGetAllClubsToClubs', () => {
  it('returns empty array for empty input', () => {
    expect(mapGetAllClubsToClubs([])).toEqual([]);
  });

  it('maps array of GetAllClub to Club[]', () => {
    const items = [mockGetAllClub, { ...mockGetAllClub, id: '2', name: 'Club 2' }];
    const result = mapGetAllClubsToClubs(items);
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe('1');
    expect(result[0].name).toBe('Test Club');
    expect(result[1].id).toBe('2');
    expect(result[1].name).toBe('Club 2');
  });
});
