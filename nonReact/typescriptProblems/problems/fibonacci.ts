export const sumOfFibonnaci = (n: number): number => {
  let evenSummed = 0;
  const fibonnaciArray: number[] = [];

  const iterateFunc = (limitNum: number) => {
    //get our new number
    const newNumber = getNextNum(fibonnaciArray);

    if (newNumber > limitNum) return;
    //add onto our array
    fibonnaciArray.push(newNumber);
    //only add to sum if it is even
    if (newNumber % 2 === 0) evenSummed += newNumber;

    //recursively call
    return iterateFunc(limitNum);
  };
  iterateFunc(n);
  return evenSummed;
};

const getNextNum = (fibArray: number[]): number => {
  if (fibArray.length === 0) return 0;
  if (fibArray.length === 1) return 1;

  const newNumber =
    fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];

  return newNumber;
};
