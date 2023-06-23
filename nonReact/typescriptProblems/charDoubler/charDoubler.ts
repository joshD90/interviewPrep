const charDoubler = (myString: string): string => {
  if (myString === "") return "";
  const doubledString = myString.split("").map((char) => char + char);
  console.log(doubledString);
  return doubledString.join("");
};

const secondLargestNumber = (numArray: number[]): number => {
  if (numArray.length < 2) throw new Error("needs minimum 2 numbers");
  const numSet = new Set(numArray);
  return Array.from(numSet).sort((a, b) => a - b)[1];
};

const mostFreqChar = (myString: string): string => {
  const myMap = new Map<string, number>();
  Array.from(myString).forEach((char) => {
    if (myMap.has(char)) {
      myMap.set(char, myMap.get(char) + 1);
    } else {
      myMap.set(char, 1);
    }
  });
  console.log(myMap);
  const mostChars = Array.from(myMap.entries()).sort(
    (a, b) => b[1] - a[1]
  )[0][0];
  console.log(mostChars);
  return mostChars;
};

const reversedArray = <T>(myArray: T[]): T[] => {
  const newArray: T[] = [];
  for (let i = myArray.length - 1; i >= 0; i--) {
    newArray.push(myArray[i]);
  }
  return newArray;
};

const sumToNumber = (numArray: number[], targetNum: number): number[][] => {
  const summingNumbers = [];

  const numSet = new Set(numArray); // Create a set of unique numbers for efficient lookup

  for (let i = 0; i < numArray.length - 1; i++) {
    const currentNum = numArray[i];
    const difference = targetNum - currentNum;

    if (difference === currentNum) {
      if (numArray[i + 1] === currentNum) {
        // Check if the next element is the same
        summingNumbers.push([currentNum, currentNum]);
      }
    } else {
      if (numSet.has(difference)) {
        // Check if the set contains the difference
        summingNumbers.push([currentNum, difference]);
      }
    }
  }

  return summingNumbers;
};

const increasingSubArray = (numArray: number[]): number => {
  const longestSubArray: number[] = [];
  let longestLength = 0;

  numArray.forEach((num) => {
    if (num < longestSubArray[longestSubArray.length - 1]) {
      longestSubArray.length = 0;
      longestSubArray.push(num);
      if (longestLength < longestSubArray.length)
        longestLength = longestSubArray.length;
      return;
    }
    if (longestSubArray.length === 0) {
      longestSubArray.push(num);
      if (longestLength < longestSubArray.length)
        longestLength = longestSubArray.length;
      return;
    }
    longestSubArray.push(num);
    if (longestLength < longestSubArray.length)
      longestLength = longestSubArray.length;
  });

  return longestLength;
};

const checkPallindrome = (str: string): boolean => {
  const strippedStrArray = Array.from(
    str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  );
  const strippedString = strippedStrArray.join("");
  const strippedStringReverse = strippedStrArray.reverse().join("");

  if (strippedString === strippedStringReverse) return true;
  return false;
};

const findMissingNumber = (numbers: number[]): number | string => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] - numbers[i - 1] > 1) return numbers[i] - 1;
  }
  return "There is no missing number";
};

// const maxProfit = (stockNums: number[]): number => {
//   let difference = 0;

//   for (let i = 0; i < stockNums.length; i++) {
//     for (let n = i + 1; n < stockNums.length; n++) {
//       if (n - i > difference) difference = n - i;
//     }
//   }
//   return difference;
// };

const reverseStringNew = (myString: string): string => {
  let newString = "";
  for (let i = myString.length - 1; i > -1; i--) {
    console.log(myString[i]);
    newString += myString[i];
  }
  return newString;
};

console.log(reverseStringNew("Khalid"));
