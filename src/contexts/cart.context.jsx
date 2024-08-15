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

const deleteCartItems = (CartItems, ProductToRemove) => {
  return CartItems.filter((cartItem) => cartItem.id !== ProductToRemove.id);
};

const ReduceItemFromCart = (CartItems, ProductToRemove) => {
  const existingCartItem = CartItems.find(
    (cartItem) => cartItem.id === ProductToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return CartItems;
  }

  return CartItems.map((cartItem) =>
    cartItem.id === ProductToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  CartItems: [],
  addItemtoCart: () => {},
  deleteItemFromCart: () => {},
  reduceItemCountFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [CartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartCount = CartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    );
    setCartCount(cartCount);
  }, [CartItems]);

  useEffect(() => {
    const cartTotal = CartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(cartTotal);
  }, [CartItems]);

  const addItemsToCart = (ProductToAdd) => {
    setCartItems(addCartItems(CartItems, ProductToAdd));
  };

  const deleteItemFromCart = (ProductToRemove) => {
    setCartItems(deleteCartItems(CartItems, ProductToRemove));
  };

  const reduceItemCountFromCart = (ProductToRemove) => {
    setCartItems(ReduceItemFromCart(CartItems, ProductToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    CartItems,
    addItemsToCart,
    deleteItemFromCart,
    reduceItemCountFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
