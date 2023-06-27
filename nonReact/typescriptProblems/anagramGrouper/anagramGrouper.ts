const anagramGrouper = (anaStrings: string[]): string[][] => {
  const resultMap = new Map<string, string[]>();

  anaStrings.forEach((str) => {
    if (resultMap.has(str)) return;
    resultMap.set(str, [str]);
    for (let i = 0; i < anaStrings.length; i++) {
      if (findIsAnagram(str, anaStrings[i])) {
        resultMap.set(str, [...resultMap.get(str), anaStrings[i]]);
        resultMap.set(anaStrings[i], []);
      }
    }
  });

  const returnArray = Array.from(resultMap.values());
  return returnArray.filter((elem) => elem.length > 1);
};

const findIsAnagram = (string1: string, string2: string): boolean => {
  if (string1 === string2) return false;
  if (string1.length !== string2.length) return false;

  const stringMap1 = new Map();
  for (const char of string1) {
    const numberOfOccurences = stringMap1.get(char) || 0;
    stringMap1.set(char, numberOfOccurences + 1);
  }

  const stringMap2 = new Map();
  for (const char of string2) {
    const numberOfOccurences = stringMap2.get(char) || 0;
    stringMap2.set(char, numberOfOccurences + 1);
  }

  for (const char of stringMap1) {
    if (!stringMap2.has(char[0])) {
      console.log("doesn't have it");
      return false;
    }
    if (!(stringMap2.get(char[1]) === stringMap1.get(char[1]))) {
      console.log("numbers dont add up");
      return;
    }
  }

  return true;
};

console.log(anagramGrouper(["tea", "ate", "eat", "tear", "rate", "rice"]));
