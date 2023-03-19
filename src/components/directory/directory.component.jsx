import React from "react";
import DirectoryItem from "../directory-item/dicrectory-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem
          key={category.id}
          title={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
