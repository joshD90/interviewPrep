import { FC, useContext } from "react";
import { CartContext } from "./CartContext";

export const CartCaller: FC = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <button onClick={() => setCart((prev) => [...prev, "one more"])}>
        Add one more
      </button>
    </div>
  );
};
