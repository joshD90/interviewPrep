const maxDifference = (numArr: number[]): number => {
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  const difference = max - min;
  return difference;
};
