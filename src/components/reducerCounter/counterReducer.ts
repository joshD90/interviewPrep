type ActionType = { type: string; changeAmount: number };

const counterReducer = (state: number, action: ActionType): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.changeAmount;
    case "DECREMENT":
      return state - action.changeAmount;

    default:
      return state;
  }
};

export default counterReducer;
