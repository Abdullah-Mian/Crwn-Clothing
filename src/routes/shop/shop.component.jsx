import { useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const navigate = useNavigate();
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2 onClick={() => navigate(`/${title}`)}>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map(
              (product, index) =>
                index < 4 && <ProductCard key={product.id} product={product} />
            )}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
