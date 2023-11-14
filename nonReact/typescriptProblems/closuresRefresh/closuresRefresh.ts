export const revealInnerVar = () => {
  const innerVar = "I AM THE INNER VAR";

  return () => console.log(innerVar);
};

const showVar = revealInnerVar();
console.log("I should be called first");
showVar();

export const privatelyIncrement = (incrementAmount: number) => {
  let counter = 0;
  const increment = () => (counter += incrementAmount);
  return increment;
};

const incrementingNumber = privatelyIncrement(3);
incrementingNumber();
incrementingNumber();
console.log(incrementingNumber());

const debounce = (fn: (args: unknown[]) => unknown, delay: number) => {
  let timerId: NodeJS.Timeout;

  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
const callConsole = () => {
  console.log("Should only be called once");
};

const debouncedCall = debounce(callConsole, 1000);
debouncedCall();
debouncedCall();
debouncedCall();
debouncedCall();
