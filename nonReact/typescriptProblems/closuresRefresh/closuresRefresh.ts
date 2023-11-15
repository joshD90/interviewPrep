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

const throttle = (fn: (args: any[]) => any, delay) => {
  let lastTime: number | undefined;

  return (...args) => {
    if (!lastTime || Date.now() - lastTime >= delay) {
      fn([...args]);
      lastTime = Date.now();
    }
  };
};

const myConsole = () => {
  console.log(
    "Should only on the first on the first one because of throttling"
  );
};

const throttledConsole = throttle(myConsole, 10);

throttledConsole();
throttledConsole();
throttledConsole();

const memoize = (fn: (...args: any[]) => any) => {
  const store = new Map<string, any>();

  return (...args) => {
    const key = JSON.stringify(args);
    const existingEntry = store.get(key);

    if (existingEntry) return existingEntry;

    store.set(key, fn(...args));
  };
};
