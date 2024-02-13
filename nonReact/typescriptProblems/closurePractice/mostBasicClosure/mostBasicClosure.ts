const mostBasicClosure = () => {
  const hiddenVar = "I am internal to this closure";

  const innerFunc = () => {
    console.log(hiddenVar);
  };

  return innerFunc;
};

const getMostBasicClosure = mostBasicClosure();

getMostBasicClosure();
