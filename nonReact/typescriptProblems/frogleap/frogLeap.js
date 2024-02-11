const frogLeap = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentValue = arr[i];
    const targetValue = arr[i + 1];
    if (!checkIfWithinRange(currentValue, targetValue, i)) return false;
  }
  return true;
};

const checkIfWithinRange = (currentValue, targetValue, index) => {
  const difference = targetValue - currentValue;
  if (
    difference === index + 1 ||
    difference === index - 1 ||
    difference === index
  )
    return true;
  return false;
};

const array1 = [0, 1, 3, 5, 9, 12, 19];

console.log(frogLeap(array1));

// designing data intesnsive systems
