const longestNoRepeatSubstring = (str: string): string => {
  let maxLength = 0;
  let start = 0;
  let end = 0;

  const charIndexMap: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    //the start trails behind the moving end creating the window if we come across a repeat and that repeated index is not outside the window we reset the start to one beyond that
    if (charIndexMap[char] !== undefined && charIndexMap[char] > start)
      start = charIndexMap[char] + 1;

    charIndexMap[char] = i;

    if (i - start > maxLength) {
      maxLength = i - start;
      end = i;
    }
  }

  return str.slice(end - maxLength, end + 1);
};

console.log(longestNoRepeatSubstring("abccdefgchijklmnoa"));
