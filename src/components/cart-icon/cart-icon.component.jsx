import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { CartContext } from "../context/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { cartQuantity } = useContext(CartContext);
  const { showCart, setShowCart } = useContext(CartContext);
  const toggleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
