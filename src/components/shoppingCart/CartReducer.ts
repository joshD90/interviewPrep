type CartItem = {
  id: string;
  price: number;
  name: string;
  quantity: number;
};
type Cart = {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
};

type CartAction = {
  type: "addCartItem" | "clearCart" | "removeCartItem";
  payload: CartItem;
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case "addCartItem": {
      //if it is already in the cart
      if (state.items.find((item) => item.id === action.payload.id)) {
        const updatedArray = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return {
          totalQuantity: state.totalQuantity + 1,
          totalPrice: state.totalPrice + action.payload.price,
          items: updatedArray,
        };
      }
      const updatedQuantity = state.totalQuantity++;
      const updatedPrice = state.totalPrice + action.payload.price;
      const updatedItems = [...state.items, action.payload];
      return {
        totalQuantity: updatedQuantity,
        totalPrice: updatedPrice,
        items: updatedItems,
      };
    }

    case "removeCartItem": {
      //if it isnt in the cart
      const itemToremove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToremove) return state;

      const updatedQuantity = state.totalQuantity--;
      const updatedPrice = state.totalPrice - action.payload.price;

      let updatedItems;
      if (itemToremove.quantity > 1) {
        updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id)
            return { ...item, quantity: item.quantity - 1 };
          return item;
        });
      } else {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }

      return {
        totalQuantity: updatedQuantity,
        totalPrice: updatedPrice,
        items: updatedItems,
      };
    }

    case "clearCart": {
      return { totalQuantity: 0, totalPrice: 0, items: [] };
    }
  }
};

export default cartReducer;
