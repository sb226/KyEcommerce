import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";
import { getCategoryNameList } from "../components/assets/cat-data";
import "./css/ShopCategory.css";
import { IoMdArrowDropdown } from "react-icons/io";

export default function ShopCategory() {
  const [allowedParam, setAllowedParam] = useState(null);
  const { products } = useContext(ShopContext);

  useEffect(() => {
    async function getCategoryList() {
      const data = await getCategoryNameList();
      setAllowedParam(data);
    }
    getCategoryList();
  }, []);

  const { categoryName } = useParams();

  if (allowedParam === null) {
    return <p>Loading...</p>;
  }

  if (!allowedParam.includes(categoryName)) {
    return <PageNotFound />;
  }

  return (
    <div className="shop-category-container">
      <div className="shop-category-sort">
        Sort by <IoMdArrowDropdown size={30} />
      </div>
      <div className="shop-category-products">
        {products.map((item, index) => {
          if (categoryName === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shop-category-load-more">Load More</div>
    </div>
  );
}
