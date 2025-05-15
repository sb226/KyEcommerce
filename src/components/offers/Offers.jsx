import "./Offers.css";
import { fetchProducts } from "../../api/data";
import { useState, useEffect } from "react";

export default function Offers() {
  const [image, setImage] = useState("");

  async function getProduct() {
    const data = await fetchProducts(true);
    setImage(data.images[0]);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="offers-container">
      <div className="offers-left">
        <h1>Up to 5% OFF</h1>
        <p>What a save !!!</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
