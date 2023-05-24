//palindrome test

const alphanumericCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

export const isPalindrome = (string: string): boolean => {
  if (string === "") return true;
  //prepare our string
  const stringArray = string.toLowerCase().split("");
  const filteredArray = stringArray.filter((char) =>
    alphanumericCharacters.includes(char)
  );
  //return true if just nonalphanumeric values
  if (filteredArray.length === 0) return true;
  // eslint-disable-next-line prefer-const
  const shouldReturn = recursivelyCheckString(filteredArray);
  console.log(shouldReturn, "should return");
  return shouldReturn;
};

const recursivelyCheckString = (remainingString: string[]): boolean => {
  console.log(remainingString.join(""));
  if (remainingString.length <= 1) {
    return true;
  }
  if (remainingString[0] === remainingString[remainingString.length - 1]) {
    const cutString = remainingString.slice(1, remainingString.length - 1);
    return recursivelyCheckString(cutString);
  }
  console.log("should never get to here");
  return false;
};
