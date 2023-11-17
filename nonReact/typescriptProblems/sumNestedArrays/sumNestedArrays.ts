type NestedNumberType = number | NestedNumberType[];

const sumNestedArrays = (numArray: NestedNumberType) => {
  const totalSum = { total: 0 };
  spreadNumbers(numArray, totalSum);
  return totalSum;
};

export default sumNestedArrays;

const spreadNumbers = (
  numbers: NestedNumberType,
  totalSum: { total: number }
) => {
  if (typeof numbers === "number") return (totalSum.total += numbers);
  for (const num of numbers ?? []) {
    spreadNumbers(num, totalSum);
  }
};

const nestedArray = [
  1,
  2,
  3,
  [1, 2, 3],
  [1, 2, 3, [1, 2, 3], [1, 2, 3, [1, 2, 3]]],
  1,
];

console.log(sumNestedArrays(nestedArray));
