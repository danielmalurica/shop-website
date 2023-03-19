import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price } = cartItem.product;
  const { quantity } = cartItem;
  const { removeEntireItemFromCart, addToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItemFromCart(cartItem.product)}
        >
          &lt;
        </div>{" "}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addToCart(cartItem.product)}>
          &gt;
        </div>
      </span>
      <span className="price">{price} $</span>
      <div
        className="remove-button"
        onClick={() => removeEntireItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
