import { FC, useReducer } from "react";
import "./counter.css";
import counterReducer from "./counterReducer";

const Counter: FC = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <section className="container">
      <div className="counterDiv">
        <button
          onClick={() => dispatch({ type: "DECREMENT", changeAmount: 2 })}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch({ type: "INCREMENT", changeAmount: 2 })}
        >
          +
        </button>
      </div>
    </section>
  );
};

export default Counter;
