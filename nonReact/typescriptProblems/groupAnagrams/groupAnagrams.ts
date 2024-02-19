const test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (anagrams: string[]): string[][] => {
  if (anagrams.length <= 1) return [anagrams];
  const anagramGroups: string[][] = [];
  anagramGroups.push([anagrams[0]]);

  for (let i = 1; i < anagrams.length; i++) {
    const currentString = anagrams[i];
    const foundGroupIndex = anagramGroups.findIndex((group) =>
      testIsAnagram(group[0], currentString)
    );
    if (foundGroupIndex === -1) {
      anagramGroups.push([currentString]);
    } else {
      anagramGroups[foundGroupIndex].push(currentString);
    }
  }
  return anagramGroups;
};

const testIsAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;
  const str1Arr = str1.split("");

  for (let i = 0; i < str1Arr.length; i++) {
    if (!str2.includes(str1Arr[i])) return false;
  }

  return true;
};

const testResult = groupAnagrams(test1);
console.log(testResult, "test result");

//again in better time efficiency

const efficientGroupAnagrams = (anagrams: string[]) => {
  const anagramMap = new Map<string, string[]>();
  anagrams.forEach((anagram) => {
    const sortedAnagram = anagram.split("").sort().join("");
    const mapValue = anagramMap.get(sortedAnagram);

    if (!mapValue) {
      anagramMap.set(sortedAnagram, [anagram]);
    } else {
      anagramMap.set(sortedAnagram, [...mapValue, anagram]);
    }
  });

  const anagramArray = [...anagramMap.values()];
  return anagramArray;
};

console.log(efficientGroupAnagrams(test1));
