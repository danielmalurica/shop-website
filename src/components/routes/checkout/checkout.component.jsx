import React, { useContext, useEffect } from "react";
import CheckoutItem from "../../checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const CheckoutComponent = () => {
  var total = 0;
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <div key={item.product.id}>
          <CheckoutItem key={item.id} cartItem={item} />
        </div>
      ))}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
};

export default CheckoutComponent;
