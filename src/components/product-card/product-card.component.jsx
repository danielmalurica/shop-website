import React, { useContext } from "react";
import ButtonComponent from "../button/button.component";
import { CartContext } from "../context/cart.context";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={`${product.name}`} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <ButtonComponent buttonType="inverted" onClick={() => addToCart(product)}>
        Add to cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
