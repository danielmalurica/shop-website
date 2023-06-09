import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProvider } from "./components/context/user.context";
import { CategoriesProvider } from "./components/context/categories.context";
import { CartContext, CartProvider } from "./components/context/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <UserProvider>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </UserProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
