const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

const filter = <T>(arrayToFilter: T[], filterFn: (x: T) => boolean) => {
  return arrayToFilter.filter(filterFn);
};

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, isEven);
console.log(evenNumbers, "even numbers");

//more generics map array
const square = (number: number): number => {
  return number * number;
};

const mapArray = <T>(arrayToMap: T[], mappingFunction: (el: T) => T): T[] => {
  const mappedArray = arrayToMap.map(mappingFunction);
  return mappedArray;
};

const secondNUmbers = [1, 2, 3, 4, 5];

const squareNumbers = mapArray(secondNUmbers, square);

console.log(squareNumbers);
