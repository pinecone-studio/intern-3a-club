export const resolveFrequency = (freq: string): 'ONCE' | 'WEEKLY' => {
  if (freq === 'ONCE' || freq === 'WEEKLY') {
    return freq;
  }

  throw new Error(`Invalid frequency: ${freq}. Expected 'ONCE' or 'WEEKLY'.`);
};
