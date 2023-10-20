// const flattenObj = (input:Record<string,any>):Record<string,any> => {
//     const flattenedObject:Record<string,any> = {};

// }

// const addToFlattenedObject = (key:string,value:unknown,flattenedObject:Record<string,any>) => {

// }

const flattenObj = (input: unknown) => {
  console.log(Object.getPrototypeOf(input) === Object.prototype);
};

flattenObj({ key1: "Something", key2: "something else" });
flattenObj({});
