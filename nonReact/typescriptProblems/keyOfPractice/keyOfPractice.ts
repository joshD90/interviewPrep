type CurrentObject = {
  foo: string;
  something: string;
  wicked: string;
  thisa: string;
};

const instantiatedObject: CurrentObject = {
  foo: "bar",
  something: "else",
  wicked: "comes",
  thisa: "ways",
};

const keysOfObject = Object.keys(instantiatedObject);

keysOfObject.forEach((key) => {
  const safeKey = key as keyof CurrentObject; //possible to get wrong but usually good enough in most cases
  return instantiatedObject[safeKey];
});
