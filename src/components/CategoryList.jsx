import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((itm) => {
        return <CategoryItem key={itm.idCategory} {...itm} />;
      })}
    </div>
  );
}

export default CategoryList;
