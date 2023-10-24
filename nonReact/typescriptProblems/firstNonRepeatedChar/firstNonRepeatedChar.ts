const firstNonRepeatedChar = (str: string): string | null => {
  const charMap = new Map<string, { count: number; index: number }>();
  //build our map
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    const letterCount = charMap.get(letter);
    if (!letterCount) {
      charMap.set(letter, { count: 1, index: i });
      continue;
    }
    letterCount.count++;
  }
  const firstNonRepeating = Array.from(charMap)
    .filter((obj) => obj[1].count < 2)
    .sort((a, b) => a[1].index - b[1].index)[0];
  if (!firstNonRepeating) return null;
  return firstNonRepeating[0];
};

console.log(firstNonRepeatedChar("sttressr"));
