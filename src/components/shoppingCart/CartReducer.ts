export type CartItem = {
  price: number;
  name: string;
  quantity: number;
  id: string;
};
type Cart = {
  items: Map<string, CartItem>;
  totalQuantity: number;
  totalPrice: number;
};

type CartAction = {
  type: "addCartItem" | "clearCart" | "removeCartItem";
  payload: CartItem;
};

const cartReducer = (state: Cart, action: CartAction): Cart => {
  const existingItem = state.items.get(action.payload.id);
  console.log(JSON.stringify(existingItem));

  switch (action.type) {
    case "addCartItem": {
      let updatedItems;
      //if it is already in the cart
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems = new Map(state.items);
        updatedItems.set(action.payload.id, updatedItem);
      } else {
        updatedItems = new Map(state.items);
        updatedItems.set(action.payload.id, { ...action.payload, quantity: 1 });
      }
      return {
        items: updatedItems,
        totalQuantity: state.totalQuantity + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };
    }

    case "removeCartItem": {
      //if no item in cart
      if (!existingItem) return state;
      let updatedItems;
      if (existingItem.quantity > 1) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = new Map(state.items);
        updatedItems.set(action.payload.id, updatedItem);
      } else {
        updatedItems = new Map(state.items);
        updatedItems.delete(action.payload.id);
      }
      return {
        items: updatedItems,
        totalQuantity: state.totalQuantity - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };
    }

    case "clearCart": {
      return {
        totalQuantity: 0,
        totalPrice: 0,
        items: new Map<string, CartItem>(),
      };
    }
  }
};

export default cartReducer;
