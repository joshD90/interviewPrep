//first lets look at closure

//global scope
let x = 1;

const parentFunction = (cb) => {
  //local scope
  let myValue = 2;
  const childFunction = () => {
    myValue += 1;
    cb(myValue);
  };
  return childFunction;
};

const callback = (y) => {
  console.log(y);
};

const result = parentFunction(callback);

//decorator functions
//a function that enhances or 'decorates' the core functionality of other functions
//they wrap a function within another function

//we use let here so that we can redifne the function with the same name upon insertion into the decorator function

//core function
let sum = (...args) => {
  return [...args].reduce((acc, num) => acc + num);
};

const callCounter = (fn) => {
  let count = 0;

  return (...args) => {
    return fn(...args);
  };
};

sum = callCounter(sum);

//check for valid data and number of params
let rectangleArea = (length, width) => {
  return length * width;
};

const paramCounter = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`);
    }
    return fn(...params);
  };
};

const requireIntegers = (fn) => {
  const name = fn;
  console.log("name in parent: ", name);
  return (...params) => {
    console.log(name, "name");
    params.forEach((param) => {
      if (!Number.isInteger(param))
        throw new Error(`Params for ${name} must be integers`);
    });

    return fn(...params);
  };
};

//we can decorate and redecorate it multiple times
rectangleArea = paramCounter(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);

console.log(rectangleArea(5, 20));

//decorate an async api call function
//Time data requiests during development

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const dataResponseTime = (fn) => {
  return async (url) => {
    console.time("fn");
    const data = await fn(url);
    console.timeEnd("fn");
    return data;
  };
};

const testFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log(data);
};

testFunction();

t = 10;
console.log(t);
var t;
