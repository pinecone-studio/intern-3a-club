import { UPDATE_TIMETABLE } from '../../app/_components/teacher/approved/edit/timetable.mutations';

describe('UPDATE_TIMETABLE', () => {
  it('should be defined', () => {
    expect(UPDATE_TIMETABLE).toBeDefined();
  });

  it('should contain mutation name', () => {
    expect(UPDATE_TIMETABLE.loc?.source.body).toContain('updateTimetable');
  });

  it('matches snapshot', () => {
    expect(UPDATE_TIMETABLE).toMatchSnapshot();
  });
});
