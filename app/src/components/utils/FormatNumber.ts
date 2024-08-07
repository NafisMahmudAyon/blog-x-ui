export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num % 1000000 === 0) ? (num / 1000000).toFixed(0) + 'M' : (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num % 1000 === 0) ? (num / 1000).toFixed(0) + 'k' : (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
};