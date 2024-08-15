import { createContext, useState, useEffect } from "react";

const addCartItems = (CartItems, ProductToAdd) => {
  const existingCartItem = CartItems.find(
    (cartItem) => cartItem.id === ProductToAdd.id
  );
  if (existingCartItem) {
    return CartItems.map((cartItem) =>
      cartItem.id === ProductToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...CartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeItemFromCart = (CartItems, ProductToRemove) => {
  return CartItems.filter((cartItem) => cartItem.id !== ProductToRemove.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemtoCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cartCount = CartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    );
    setCartCount(cartCount);
  }, [CartItems]);

  const removeItemsFromCart = (ProductToRemove) => {
    setCartItems(removeItemFromCart(CartItems, ProductToRemove));
  };

  const addItemsToCart = (ProductToAdd) => {
    setCartItems(addCartItems(CartItems, ProductToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    addItemsToCart,
    cartCount,
    removeItemsFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
