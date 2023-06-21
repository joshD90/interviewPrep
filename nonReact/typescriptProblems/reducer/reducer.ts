const addAllEven = (numArray: number[]): number => {
  const total = numArray.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) return accumulator + currentValue;

    return accumulator;
  }, 0);
  return total;
};

console.log(addAllEven([1, 2, 3, 4]));
