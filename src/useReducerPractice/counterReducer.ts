export type CounterReducerActionType = "INCREMENT" | "DECREMENT" | "RESET";

export const counterReducer = (
  state: number,
  action: { type: CounterReducerActionType; payload?: number }
) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload ?? 1);
    case "DECREMENT":
      return state - (action.payload ?? 1);
    case "RESET":
      return 0;
  }
};
