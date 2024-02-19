const firstNonRepeatingChar = (str: string) => {
  const charMap = new Map<string, number>();
  const strArr = str.split("");

  str.split("").forEach((char) => {
    const charInMap = charMap.get(char);
    if (!charInMap) {
      charMap.set(char, 1);
    } else {
      charMap.set(char, charInMap + 1);
    }
  });

  for (let i = 0; i < strArr.length; i++) {
    if (charMap.get(strArr[i]) === 1) return strArr[i];
  }

  return null;
};

const test = firstNonRepeatingChar("aabbccddeeffgg");
console.log(test);
