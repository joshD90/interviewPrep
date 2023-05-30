const reverseString = (string: string): string => {
  return string.split("").reverse().join("");
};

console.log(reverseString("reversedString"));

const findSumPair = (numArray: number[], targetNum: number): number[][] => {
  //iterate through all numbers and on each iteration, iterate through all the other numbers to see whether their sum adds up to the target
  const compareNumber = (
    number: number,
    index: number,
    matchCriteria: number[][]
  ) => {
    const validCombinations: number[][] = [];
    numArray.forEach((num, i) => {
      if (i === index) return;
      if (number + num === targetNum) {
        const notThereInReverse = matchCriteria.every(
          (el) => el[0] !== num && el[1] !== number
        );
        if (notThereInReverse) validCombinations.push([number, num]);
      }
    });
    return validCombinations;
  };

  let matchCriteria: number[][] = [];
  numArray.forEach((num, index) => {
    matchCriteria = [
      ...matchCriteria,
      ...compareNumber(num, index, matchCriteria),
    ];
  });

  return matchCriteria;
};

const arrayToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findSumPair(arrayToCheck, 10));

//a much better way to do it in O of n complexity

const findSumPairs2 = (numbers: number[], target: number) => {
  const numSet = new Set<number>();
  const validPairs: number[][] = [];

  for (const num of numbers) {
    const compliment = target - num;
    if (numSet.has(compliment)) {
      validPairs.push([num, compliment]);
    }
    numSet.add(num);
  }
  return validPairs;
};

const arrayToCheck2 = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9, 10];
console.log(findSumPairs2(arrayToCheck2, 10));
