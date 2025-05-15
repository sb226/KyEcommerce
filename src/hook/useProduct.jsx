import { useState, useEffect } from "react";
import { fetchProducts } from "../api/data";

export default function useProduct() {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    const data = await fetchProducts();
    if (data) setProducts(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return { products };
}
