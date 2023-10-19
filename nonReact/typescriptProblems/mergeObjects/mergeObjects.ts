const mergeObjects = <T, J>(object1: T, object2: J): T & J => {
  return { ...object1, ...object2 };
};
