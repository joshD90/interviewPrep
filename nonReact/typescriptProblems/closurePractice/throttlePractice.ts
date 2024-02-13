const throttlePractice = (func: () => unknown, delayTime: number) => {
  let prevDate = Date.now();

  return () => {
    const currentDate = Date.now();
    if (currentDate - prevDate > delayTime) {
      prevDate = currentDate;
      func();
    }
  };
};
