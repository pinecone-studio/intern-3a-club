export const toggleItem = (prev: string[], label: string) => {
  if (prev.includes(label)) {
    return prev.filter((item) => item !== label);
  }
  return [...prev, label];
};
