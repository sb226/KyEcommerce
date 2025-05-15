import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";
import "./css/ShopCategory.css";
import { IoMdArrowDropdown } from "react-icons/io";
import Breadcrum from "../components/breadcrum/Breadcrum";
import useCategoryList from "../hook/useCategoryList";

export default function ShopCategory() {
  const { allowedParam } = useCategoryList();
  const { products } = useContext(ShopContext);
  const { categoryName } = useParams();
  const crumbs = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/" },
    { label: `${categoryName}` },
  ];

  // This is not a large list so not sure if this is necessary
  const filteredProducts = useMemo(() => {
    return products.filter((item) => item.category === categoryName);
  }, [products, categoryName]);

  if (allowedParam === null) {
    return <></>;
  }

  if (!allowedParam.includes(categoryName)) {
    return <PageNotFound />;
  }

  return (
    <div className="shop-category-container">
      <Breadcrum crumbs={crumbs} />
      <div className="shop-category-sort">
        Sort by <IoMdArrowDropdown size={30} />
      </div>
      <div className="shop-category-products">
        {filteredProducts.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="shop-category-load-more">Load More</div>
    </div>
  );
}
