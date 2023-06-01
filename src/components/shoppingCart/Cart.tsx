import { useReducer } from "react";
import "./cart.css";
import cartReducer from "./CartReducer";

const Cart = () => {
  const initialCart = { totalQuantity: 0, totalPrice: 0, items: [] };
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <div className="cart-container">
      {/* shopping side */}
      <div className="shopping">
        {cartItems.map((item) => (
          <div key={item.id} id={item.id} className="item">
            <button
              onClick={() =>
                dispatch({ type: "removeCartItem", payload: item })
              }
            >
              Remove
            </button>
            <div>
              <h3>Item Name: {item.name}</h3>
              <p>Price: €{item.price}</p>
            </div>
            <button
              onClick={() => dispatch({ type: "addCartItem", payload: item })}
            >
              Add
            </button>
          </div>
        ))}
      </div>
      {/* cart side */}
      <div className="cart">
        <h2>{cart.totalQuantity} Items are in Your Cart</h2>
        <h2>Total: €{cart.totalPrice}</h2>
        {cart.items.map((item) => (
          <div key={item.id}>
            <h3>Item Name: {item.name}</h3>
            <p>Price: €{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={() =>
                  dispatch({ type: "removeCartItem", payload: item })
                }
              >
                -
              </button>
              <button
                onClick={() => dispatch({ type: "addCartItem", payload: item })}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

const cartItems = [
  {
    id: "item-1",
    name: "Item 1",
    price: 47,
    quantity: 1,
  },
  {
    id: "item-2",
    name: "Item 2",
    price: 83,
    quantity: 1,
  },
  {
    id: "item-3",
    name: "Item 3",
    price: 12,
    quantity: 1,
  },
  {
    id: "item-4",
    name: "Item 4",
    price: 56,
    quantity: 1,
  },
  {
    id: "item-5",
    name: "Item 5",
    price: 92,
    quantity: 1,
  },
];
