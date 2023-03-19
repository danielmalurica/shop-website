import React from "react";
import { NavLink } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ title, imageUrl }) => {
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ background: `url(${imageUrl})` }}
      />
      <div className="directory-item-body-container">
        <NavLink to={`/shop/` + title.toLowerCase()}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </NavLink>
      </div>
    </div>
  );
};

export default DirectoryItem;
