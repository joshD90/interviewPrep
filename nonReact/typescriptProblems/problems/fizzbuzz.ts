//fizzbuzz

type FizzOutputs = "fizz" | "buzz" | "fizzbuzz" | number;

const buzzYourFizz = (num: number): FizzOutputs => {
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 5 === 0) return "buzz";
  if (num % 3 === 0) return "fizz";
  return num;
};
buzzYourFizz(2);

//reverse string

export const reverseString = (string: string): string => {
  let reversedString = "";

  for (let i = string.length; i--; i < 0) {
    reversedString += string[i];
  }

  return reversedString;
};

export const reverseString2 = (string: string): string => {
  return string.split("").reverse().join("");
};
