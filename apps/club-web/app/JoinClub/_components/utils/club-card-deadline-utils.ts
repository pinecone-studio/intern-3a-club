import { diffToTimeLeft, EnrollmentStatus } from './clubs-utils';

export const formatDeadlineText = (deadline: Date): string => {
  const y = deadline.getFullYear();
  const m = String(deadline.getMonth() + 1).padStart(2, '0');
  const d = String(deadline.getDate()).padStart(2, '0');
  const h = String(deadline.getHours()).padStart(2, '0');
  const min = String(deadline.getMinutes()).padStart(2, '0');
  return `${y}-${m}-${d}-ний ${h}:${min} хүртэл бүртгүүлэх боломжтой`;
};

const isValidDate = (val: string | null | undefined): val is string =>
  !!val && !Number.isNaN(new Date(val).getTime());

const getOpenText = (startDate: string | null | undefined): string => {
  if (isValidDate(startDate)) return formatDeadlineText(new Date(startDate));
  return 'Бүртгэл нээлттэй';
};

const getPendingText = (
  createdAt: string | null | undefined,
  nowTs: number
): string => {
  if (!isValidDate(createdAt)) return 'Удахгүй нээгдэнэ';
  const diffMs = new Date(createdAt).getTime() - nowTs;
  if (diffMs > 0) return `${diffToTimeLeft(diffMs)} дараа бүртгэл нээгдэнэ`;
  return 'Удахгүй нээгдэнэ';
};

export const getDeadlineText = (
  status: EnrollmentStatus,
  createdAt: string | null | undefined,
  startDate: string | null | undefined,
  nowTs: number = Date.now()
): string => {
  if (status === 'expired') return 'Бүртгүүлэх боломжгүй (Клуб эхэлсэн)';
  if (status === 'open') return getOpenText(startDate);
  return getPendingText(createdAt, nowTs);
};

export const getDeadlineClass = (_status: EnrollmentStatus): string =>
  'flex items-start gap-2 text-[10px] font-medium text-white/40';
