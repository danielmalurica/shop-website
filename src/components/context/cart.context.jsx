import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      return cartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...cartItems, { product, quantity: 1 }];
  };

  const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (item) => item.product.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.product.id !== productToRemove.id
      );
    }

    if (existingCartItem) {
      return cartItems.map((item) =>
        item.product.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  };

  const deleteItem = (cartItems, product) => {
    const existingCartItem = cartItems.map((item) => item.id === product.id);

    return cartItems.filter(
      (cartItem) => cartItem.product.id !== product.product.id
    );
  };

  const addToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeEntireItemFromCart = (productToRemove) => {
    setCartItems(deleteItem(cartItems, productToRemove));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.product.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    addToCart,
    cartQuantity,
    removeItemFromCart,
    removeEntireItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
