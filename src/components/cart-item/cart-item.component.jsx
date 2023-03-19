import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price } = cartItem.product;
  const { quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <div className="cart-item-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity} x ${price}
          </span>
        </div>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
