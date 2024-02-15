type Obj1 = {
  productId: number;
  productName: string;
}[];

type Obj2 = {
  [key: string]: { name: string; id: number };
};

type Obj3 = [number, string][];

const isObj1 = (obj: unknown): obj is Obj1 => {
  if (
    Array.isArray(obj) &&
    obj.every(
      (value) =>
        typeof value.productId === "number" &&
        typeof value.productName === "string"
    )
  )
    return true;
  return false;
};

const isObj2 = (obj: unknown): obj is Obj2 => {
  if (
    typeof obj === "object" &&
    Object.values(obj).every(
      (value) =>
        value && typeof value.name === "string" && typeof value.id === "number"
    ) &&
    Object.keys(obj).every((item) => typeof item === "string")
  )
    return true;

  return false;
};

const isObj3 = (obj: unknown): obj is Obj3 => {
  if (
    Array.isArray(obj) &&
    obj.length === 2 &&
    obj.every(
      (item) => typeof item[0] === "number" && typeof item[1] === "string"
    )
  )
    return true;
  return false;
};

const normalise = (obj: Obj1 | Obj2 | Obj3): Obj1 => {
  if (isObj1(obj)) return obj;
  if (isObj2(obj)) {
    return Object.values(obj).map((item) => ({
      productId: item.id,
      productName: item.name,
    }));
  }
  if (isObj3(obj)) {
    return obj.map((item) => ({ productId: item[0], productName: item[1] }));
  }
  throw Error("Unrecognised Obj shape");
};

const fetchAndNormalise = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw Error(response.statusText);
  const data = await response.json();

  const formattedData: Obj1 = normalise(data);

  return formattedData;
};

export const fetchAndNormaliseAll = async (
  urlArr: string[]
): Promise<Obj1[]> => {
  try {
    const responseObjects: Obj1[] = await Promise.all(
      urlArr.map((url) => fetchAndNormalise(url))
    );

    return responseObjects;
  } catch (error) {
    console.log(error);
  }
};
