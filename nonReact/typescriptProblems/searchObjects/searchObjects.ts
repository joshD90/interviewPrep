const searchObjects = <T>(objArray: T[], searchTerm: string): T[] => {
  const matchingArray = objArray.filter((obj) => {
    return Object.prototype.hasOwnProperty.call(obj, searchTerm);
  });
  return matchingArray;
};
