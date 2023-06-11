console.log("connected");

const resize = (name) => {
  console.log("resizing by " + name);
};

const throttle = (fn, delay) => {
  let lastTime = 0;

  return (...args) => {
    const now = new Date().getTime();
    if (now - lastTime < delay) return;
    lastTime = now;
    return fn(...args);
  };
};

const throttledResize = throttle(resize, 1500);

window.addEventListener("resize", () => throttledResize("Josh"));
