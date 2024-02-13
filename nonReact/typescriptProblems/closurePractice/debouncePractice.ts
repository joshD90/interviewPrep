const debounce = (func: () => unknown, timeInMs: number) => {
  let timer: NodeJS.Timeout;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, timeInMs);
  };
};
