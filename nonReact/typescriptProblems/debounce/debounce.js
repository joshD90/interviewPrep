const initApp = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", logClick);
};

let logClick = () => {
  console.log("clicked");
};

document.addEventListener("DOMContentLoaded", initApp);

const debounce = (fn, delay) => {
  let id;
  console.log(id, "id at initiation");

  return (...args) => {
    console.log("previous id", id);
    clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

logClick = debounce(logClick, 1000);
