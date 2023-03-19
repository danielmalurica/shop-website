import React, { Fragment, useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { signOutUser } from "../../../utils/firebase.utils";
import { UserContext } from "../../context/user.context";
import CartIcon from "../../cart-icon/cart-icon.component";
import "./navigation.styles.scss";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const NavigationComponent = () => {
  const signOutHandler = async () => {
    await signOutUser();
  };

  const { showCart } = useContext(CartContext);

  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <NavLink className="logo-container" to="/">
          <div>Logo</div>
        </NavLink>
        <div className="nav-links-container">
          <NavLink className="nav-link" to="shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="signin">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </div>
        {showCart && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationComponent;
