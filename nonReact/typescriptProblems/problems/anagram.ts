export const isAnagram = (string1: string, string2: string): boolean => {
  if (string1 === "" && string2 === "")
    throw Error("Please provide strings with characters");

  const str1 = string1.split(" ").join("").toLowerCase();
  let str2 = string2.split(" ").join("").toLowerCase();
  console.log(str1, str2);
  if (str1 === str2 || str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const currentChar = str1[i];
    if (!str2.includes(currentChar)) return false;
    const indexOfMatching = str2.indexOf(currentChar);
    str2 = str2.slice(0, indexOfMatching) + str2.slice(indexOfMatching + 1);
  }
  return true;
};
