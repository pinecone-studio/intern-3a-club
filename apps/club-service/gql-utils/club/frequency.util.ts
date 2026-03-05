export const resolveFrequency = (freq: string): 'ONCE' | 'WEEKLY' => {
  if (freq === 'ONCE' || freq === 'WEEKLY') {
    return freq;
  }

  throw new Error(`Invalid frequency: ${freq}. Expected 'ONCE' or 'WEEKLY'.`);
};

export const normalizeFrequency = (freq?: string | null): 'ONCE' | 'WEEKLY' => {
  const normalized = (freq ?? '').trim().toUpperCase();
  return normalized === 'ONCE' ? 'ONCE' : 'WEEKLY';
};
