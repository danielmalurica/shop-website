import React, { useContext } from "react";
import "./cart-dropdown.styles.scss";
import ButtonComponent from "../button/button.component";
import { CartContext } from "../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { NavLink } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.product.id} cartItem={item} />
        ))}
      </div>
      <NavLink className="nav-link" to="checkout">
        <ButtonComponent buttonType="inverted">GO TO CHECKOUT</ButtonComponent>
      </NavLink>
    </div>
  );
};

export default CartDropdown;
