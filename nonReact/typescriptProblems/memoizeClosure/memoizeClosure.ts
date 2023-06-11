const memoize = <T extends (...args: unknown[]) => unknown>(fn: T) => {
  const cache: { [key: string]: ReturnType<T> } = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) cache[key] = fn(...args) as ReturnType<T>;

    return cache[key];
  };
};

const findNthRoot = (num: number, sqrePower: number): number => {
  return Math.pow(num, 1 / sqrePower);
};

const memoizedRoot = memoize(findNthRoot);

const fourthPower = memoizedRoot(100, 2);
console.log(fourthPower);
