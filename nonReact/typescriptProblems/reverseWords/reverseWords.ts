const reverseWords = (words: string): string => {
  const wordsArray = words.split(" ");

  return wordsArray.map((word) => word.split("").reverse().join("")).join(" ");
};

console.log(reverseWords("This is a new reversed sentence"));
