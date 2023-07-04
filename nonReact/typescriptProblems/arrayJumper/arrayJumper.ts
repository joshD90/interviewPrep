const arrayJumper = (numArray: number[]): number => {
  if (numArray[0] === numArray.length) return 1;

  //carry out a recursive function to check number verses length - index
  return calcNumberOfJumps(numArray, 0, 0);
};

const calcNumberOfJumps = (
  numArray: number[],
  index: number,
  jumpIncrementer: number
): number => {
  if (index >= numArray.length) return -1;
  if (numArray.length - 1 - index === 0) return jumpIncrementer;
  return calcNumberOfJumps(
    numArray,
    index + numArray[index],
    jumpIncrementer + 1
  );
};

console.log(arrayJumper([1, 2, 3, 4, 5]));
