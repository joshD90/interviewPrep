const longestNoRepeatSubstring = (str: string): string | null => {
  const strArray = str.split("");
  let longestSub: string[] = [];

  strArray.forEach((str, index) => {
    const resultingSub = recursivelyCheckNextLetter(strArray, index, []);

    if (resultingSub.length > longestSub.length) longestSub = resultingSub;
  });
  console.log(longestSub);
  return longestSub.join("");
};

const recursivelyCheckNextLetter = (
  strArray: string[],
  index: number,
  sub: string[]
): string[] => {
  if (sub.includes(strArray[index]) || !strArray[index]) {
    return sub;
  }
  sub.push(strArray[index]);

  return recursivelyCheckNextLetter(strArray, index + 1, sub);
};

console.log(longestNoRepeatSubstring("abccdefgchijklmnoa"));

export default longestNoRepeatSubstring;
