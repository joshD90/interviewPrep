enum Operator {
  ADD = "add",
  MULTIPLY = "multiply",
}

export const addOrMultiply = (
  numbers: number[],
  operator: Operator
): number => {
  return numbers.reduce((accumulator, currentValue) => {
    if (operator === Operator.ADD) {
      return accumulator + currentValue;
    } else {
      return accumulator * currentValue;
    }
  });
};

console.log(addOrMultiply([1, 2, 3, 4, 5], Operator.MULTIPLY));
