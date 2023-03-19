import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../product-card/product-card.component";
import CategoryPreview from "../../category-preview/category-preview.component";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";

const ShopComponent = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default ShopComponent;
