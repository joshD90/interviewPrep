import React, {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const CartContext = createContext<{
  cart: string[];
  setCart: React.Dispatch<SetStateAction<string[]>>;
}>({
  cart: [],
  setCart: () => {},
});

type Props = { children: ReactNode };

export const CartContextProvider: FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<string[]>(["Item1"]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
