import { useContext } from "react";

import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../Components/category-preview/category-preview.component.jsx";
import "./shop.style.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
