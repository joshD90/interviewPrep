const findUniqueNumbers = (numbers: number[]): Set<number> => {
  const numberSet = new Set<number>(numbers);
  return numberSet;
};

const inputArray = [1, 2, 3, 2, 4, 3, 5, 6, 1];
console.log(findUniqueNumbers(inputArray));

//next
const findNumOfUniqeStrings = (stringArray: string[]): number => {
  const stringSet = new Set<string>(stringArray);
  return stringSet.size;
};

const stringArray = ["Hello", "world", "OpenAI", "ChatGPT", "programming"];
console.log(findNumOfUniqeStrings(stringArray));

//next
const countWordOccurences = (inputString: string) => {
  const stringArray = inputString.toLowerCase().split(" ");
  const stringMap = new Map<string, number>();
  stringArray.forEach((currentString) => {
    const count = stringMap.get(currentString) || 0;
    stringMap.set(currentString, count + 1);
  });

  return stringMap;
};
console.log(countWordOccurences("hello world hello world openai hello"));

//next
const checkForRepeats = (inputString: string): boolean => {
  const stringMap = new Map<string, number>();

  for (const char of inputString) {
    const count = stringMap.get(char) || 0;
    if (count === 1) return true;
    stringMap.set(char, count + 1);
  }
  return false;
};

console.log(checkForRepeats("abcdefghii"));

//next
const findMostFrequentNum = (numberArray: number[]) => {
  const numberMap = new Map<number, number>();
  for (const num of numberArray) {
    const count = numberMap.get(num) || 0;
    numberMap.set(num, count + 1);
  }

  let highest = 0;
  const highestArray: number[] = [];
  for (const [key, value] of numberMap) {
    if (value === highest) {
      console.log(`${value} is equal to ${highest}`);
      highestArray.push(key);
    }
    if (value > highest) {
      console.log(value + " is higher than " + highest);
      highest = value;
      highestArray.length = 0;
      highestArray.push(key);
      console.log(highestArray);
    }
  }

  return highestArray;
};

const inputArray3 = [1, 2, 3, 2, 4, 3, 5, 6, 1];
console.log(findMostFrequentNum(inputArray3));
