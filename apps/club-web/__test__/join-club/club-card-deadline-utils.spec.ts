import {
  getDeadlineText,
  getDeadlineClass,
  formatDeadlineText,
} from '../../app/JoinClub/_components/utils/club-card-deadline-utils';

jest.mock('../../app/JoinClub/_components/utils/clubs-utils', () => ({
  diffToTimeLeft: jest.fn((ms: number) => `${Math.floor(ms / 60000)} минут`),
}));

const futureDate = new Date(
  Date.now() + 10 * 24 * 60 * 60 * 1000
).toISOString();
const pastDate = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString();

describe('formatDeadlineText', () => {
  it('огноог зөв форматлана', () => {
    const date = new Date('2026-03-19T16:50:00');
    const result = formatDeadlineText(date);
    expect(result).toMatch(
      /2026-03-19-ний \d{2}:\d{2} хүртэл бүртгүүлэх боломжтой/
    );
  });
});

describe('getDeadlineText', () => {
  it('expired үед "Бүртгүүлэх боломжгүй" буцаана', () => {
    expect(getDeadlineText('expired', null, null)).toBe(
      'Бүртгүүлэх боломжгүй (Клуб эхэлсэн)'
    );
  });

  it('open, startDate байгаа үед deadline текст буцаана', () => {
    const result = getDeadlineText('open', null, futureDate);
    expect(result).toMatch(/хүртэл бүртгүүлэх боломжтой/);
  });

  it('open, startDate байхгүй үед "Бүртгэл нээлттэй" буцаана', () => {
    expect(getDeadlineText('open', null, null)).toBe('Бүртгэл нээлттэй');
  });

  it('open, startDate invalid үед "Бүртгэл нээлттэй" буцаана', () => {
    expect(getDeadlineText('open', null, 'invalid-date')).toBe(
      'Бүртгэл нээлттэй'
    );
  });

  it('pending, createdAt байхгүй үед "Удахгүй нээгдэнэ" буцаана', () => {
    expect(getDeadlineText('pending', null, null)).toBe('Удахгүй нээгдэнэ');
  });

  it('pending, createdAt invalid үед "Удахгүй нээгдэнэ" буцаана', () => {
    expect(getDeadlineText('pending', 'invalid', null)).toBe(
      'Удахгүй нээгдэнэ'
    );
  });

  it('pending, createdAt future үед countdown текст буцаана', () => {
    const result = getDeadlineText('pending', futureDate, null);
    expect(result).toMatch(/дараа бүртгэл нээгдэнэ/);
  });

  it('pending, createdAt past үед "Удахгүй нээгдэнэ" буцаана', () => {
    expect(getDeadlineText('pending', pastDate, null)).toBe('Удахгүй нээгдэнэ');
  });

  it('nowTs параметр ажиллана', () => {
    const result = getDeadlineText('open', null, futureDate, Date.now());
    expect(result).toMatch(/хүртэл бүртгүүлэх боломжтой/);
  });
});

describe('getDeadlineClass', () => {
  it('class string буцаана', () => {
    expect(getDeadlineClass('open')).toContain('flex');
    expect(getDeadlineClass('expired')).toContain('flex');
    expect(getDeadlineClass('pending')).toContain('flex');
  });
});
