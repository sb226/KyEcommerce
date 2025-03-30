import Item from "../item/Item";
import "./Popular.css";
import { useEffect, useState } from "react";
import { fetchProducts } from "../assets/data";

export default function Popular() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function getProduct() {
    setLoading(true);
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <div>Loading data... Please wait.</div>;
  }

  return (
    <div className="popular-container">
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {products.slice(0, 4).map((item, index) => {
          return (
            <Item
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
