const closureIncrementer = () => {
  let myHiddenNum = 0;

  const incrementNumber = () => {
    myHiddenNum++;
    return myHiddenNum;
  };

  return incrementNumber;
};

const boostNumbers = closureIncrementer();
console.log(boostNumbers());
boostNumbers();
boostNumbers();
console.log(boostNumbers());
