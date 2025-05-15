import "./Offers.css";
import { fetchProducts } from "../../api/data";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Offers() {
  const [image, setImage] = useState("");
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  async function getProduct() {
    const data = await fetchProducts(true);
    setImage(data.images[0]);
    setProductId(data.id);
  }

  useEffect(() => {
    getProduct();
  }, []);

  function handleCheckOutButton() {
    navigate(`/product/${productId}`);
  }

  return (
    <div className="offers-container">
      <div className="offers-left">
        <h1>Up to 5% OFF</h1>
        <p>What a save !!!</p>
        <button onClick={handleCheckOutButton}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
