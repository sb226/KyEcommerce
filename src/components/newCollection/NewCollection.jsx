import "./NewCollection.css";
import Item from "../item/Item";
import { fetchProducts } from "../assets/data";
import { useState, useEffect } from "react";

export default function NewCollection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {products.slice(0, 8).map((item, index) => {
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
