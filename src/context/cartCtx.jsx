import { useState, createContext } from "react";

export const cartCtx = createContext([]);

const CartProvider = function ({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    <cartCtx.Provider value={{ cartItems, setCartItems }}>
      {children}
    </cartCtx.Provider>
  );
};
export default CartProvider;
