import {
  GET_ALL_APPROVED_CLUBS,
  GET_ALL_PENDING_CLUBS,
  UPDATE_CLUB,
  GET_ALL_DECLINED_CLUBS,
  DELETE_CLUB,
  GET_ALL_CLUBS,
  getAllTimetablesFromData,
} from '../../libs/club-queries';

type GetAllTimetablesData = {
  getAllClubs?: {
    timetables?: { id: string }[] | undefined;
  }[];
};

describe('club-queries gql exports', () => {
  it('matches approved clubs query snapshot', () => {
    expect(GET_ALL_APPROVED_CLUBS.loc?.source.body).toMatchSnapshot();
  });

  it('matches pending clubs query snapshot', () => {
    expect(GET_ALL_PENDING_CLUBS.loc?.source.body).toMatchSnapshot();
  });

  it('matches update club mutation snapshot', () => {
    expect(UPDATE_CLUB.loc?.source.body).toMatchSnapshot();
  });

  it('matches declined clubs query snapshot', () => {
    expect(GET_ALL_DECLINED_CLUBS.loc?.source.body).toMatchSnapshot();
  });

  it('matches delete club mutation snapshot', () => {
    expect(DELETE_CLUB.loc?.source.body).toMatchSnapshot();
  });

  it('matches get all clubs query snapshot', () => {
    expect(GET_ALL_CLUBS.loc?.source.body).toMatchSnapshot();
  });
});

describe('getAllTimetablesFromData', () => {
  it('returns empty array when data is undefined', () => {
    expect(getAllTimetablesFromData(undefined)).toEqual([]);
  });

  it('returns empty array when getAllClubs is undefined', () => {
    expect(
      getAllTimetablesFromData({} as unknown as GetAllTimetablesData)
    ).toEqual([]);
  });

  it('returns flattened timetables', () => {
    const mockData: GetAllTimetablesData = {
      getAllClubs: [
        {
          timetables: [{ id: 't1' }, { id: 't2' }],
        },
        {
          timetables: [{ id: 't3' }],
        },
      ],
    };

    const result = getAllTimetablesFromData(mockData);

    expect(result).toHaveLength(3);
    expect(result.map((t) => t.id)).toEqual(['t1', 't2', 't3']);
  });

  it('handles club with undefined timetables', () => {
    const mockData: GetAllTimetablesData = {
      getAllClubs: [{ timetables: undefined }, { timetables: [{ id: 't1' }] }],
    };

    const result = getAllTimetablesFromData(mockData);

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('t1');
  });
});
