const urlArr = [
  "https://someFakeAPI1.com",
  "https://someFakeAPI2.com",
  "https://someFakeAPI3.com",
];

const normalise = (arr: Obj1 | Obj2 | Obj3): Obj1 => {
  //check if Obj1 and return;
  if (
    typeof arr[0].productId === "number" &&
    typeof arr[0].productName === "string"
  )
    return arr as Obj1;

  //check for object type 2
  const valuesArray = Object.values(arr);
  if (
    typeof valuesArray[0].name === "string" &&
    typeof valuesArray[0].id === "number"
  ) {
    const mappedValues = valuesArray.map((value) => ({
      productId: value.id,
      productName: value.productName,
    }));
    return mappedValues as Obj1;
  }

  if (
    Array.isArray(arr) &&
    Array.isArray(arr[0]) &&
    arr[0].length === 2 &&
    typeof arr[0][0] === "number" &&
    typeof arr[0][1] === "string"
  ) {
    const newArray = arr.map((value) => ({
      productId: value[0],
      productName: value[1],
    }));
    return newArray as Obj1;
  }
};

export const fetchAndNormalise = async <T extends Obj1 | Obj2 | Obj3>(
  url: string
): Promise<Obj1> => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw Error(response.statusText);
    const dataObj: T = await response.json();
    const normalisedData = normalise(dataObj);
    return normalisedData;
  } catch (error) {
    console.log(error);
    return [] as Obj1;
  }
};

export const fetchAndNormaliseAll = async () => {
  const fetchResult = await Promise.all(
    urlArr.map(async (url) => {
      const fetchedAndNormalised = await fetchAndNormalise(url);
      return fetchedAndNormalised;
    })
  );
  let spreadArray: { productId: number; productName: string }[] = [];

  fetchResult.forEach((result) => {
    spreadArray = [...spreadArray, ...result];
  });
};

type Obj1 = { productId: number; productName: string }[];
const obj1: Obj1 = [
  { productId: 1, productName: "Product 1" },
  { productId: 2, productName: "Product 2" },
];
type Obj2 = { [key: string]: { name: string; id: number } };
const obj2 = {
  "1": { name: "Product 1", id: 1 },
  "2": { name: "Product 2", id: 2 },
};
type Obj3 = (number | string)[][];
const obj3 = [
  [1, "Product 1"],
  [2, "Product 2"],
];
