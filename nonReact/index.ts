import { isAnagram } from "./typescriptProblems/problems/anagram";
import { sumOfFibonnaci } from "./typescriptProblems/problems/fibonacci";
import {
  reverseString,
  reverseString2,
} from "./typescriptProblems/problems/fizzbuzz";
import { isPalindrome } from "./typescriptProblems/problems/palindrome";

// console.log(reverseString2("Sorry!"));

// console.log(isPalindrome("AmanaplanacanalPanama"));

// console.log(sumOfFibonnaci(50));

console.log(isAnagram("eleven plus two", "twelve plus one"));

const myFunc = (animal1: string, animal2: string, animal3: string) => {
  return (...args) => args;
};

console.log(myFunc("cats", "dogs", "snakes"));
