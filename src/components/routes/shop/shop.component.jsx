import React from "react";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";

const ShopComponent = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<CategoryComponent />} />
    </Routes>
  );
};

export default ShopComponent;
