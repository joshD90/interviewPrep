const findMin = (numbers: number[]): number => {
  let minNumber: number;
  for (const num of numbers) {
    if (!minNumber) minNumber = num;
    if (num < minNumber) minNumber = num;
  }
  return minNumber;
};

console.log(findMin([2, 3, 4, 5, 6, 2, -1, 10]));

const findFirstNonRepeatingLetter = (str: string): string | null => {
  const strMap = new Map<string, number>();

  for (const char of str) {
    strMap.get(char) === undefined
      ? strMap.set(char, 1)
      : strMap.set(char, strMap.get(char) + 1);
  }
  const mapEntries = Array.from(strMap.entries());
  console.log(mapEntries, "map Entries");
  for (const [key, value] of mapEntries) {
    if (value === 1) return key;
  }

  return null;
};

console.log(findFirstNonRepeatingLetter("somerandomstring"));
