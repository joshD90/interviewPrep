import { useReducer } from "react";
import { counterReducer } from "./counterReducer";

const CallingContainer = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);

  return (
    <section>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>
        {counter}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </section>
  );
};

export default CallingContainer;
