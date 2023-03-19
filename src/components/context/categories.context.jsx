import React, { createContext, useState, useEffect } from "react";
import { SHOP_DATA } from "../../shop-data.js";
import {
  addCollectionAndDocuments,
  getCaregoriesAndDocuments,
} from "../../utils/firebase.utils.jsx";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCaregoriesAndDocuments();
      setCategories(categoryMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
