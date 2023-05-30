const counter = () => {
  let count = 0;

  return () => {
    return count++;
  };
};

const myCounter = counter();

console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

const multiply = (x) => {
  let number = x;

  return (y) => {
    return number * y;
  };
};

const multiplyByTwo = multiply(2);

console.log(multiplyByTwo(4));
console.log(multiplyByTwo(16));

//Decorator Functions

const greet = (name) => {
  return "Hello " + name;
};

const uppercase = (fn) => {
  return (name) => fn(name).toUpperCase();
};

const decorateGreet = uppercase(greet);
console.log(decorateGreet("John"));

//debouncing
const sayHello = (name) => {
  console.log("Hello " + name);
};

const debounce = (fn, delay) => {
  let id;

  return (...args) => {
    console.log(id);
    if (id) clearTimeout(id);

    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const debouncedHello = debounce(sayHello, 1000);

debouncedHello("James");
debouncedHello("Simon");
