INSERT INTO teachers (id, name, email) VALUES ('t1', 'Bold', 'bold@example.com');
INSERT INTO clubs (id, name, teacherId, type, status) VALUES ('c1', 'React', 't1', 'Programming', 'active');
INSERT INTO timetable (id, date, clubStartTime, room, clubId) VALUES ('tt1', '2026-02-13', '14:00', 301, 'c1');