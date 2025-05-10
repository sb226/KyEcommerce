import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../components/assets/data";

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const data = await fetchProducts();
      setProducts(data);
    }
    getProduct();
  }, []);

  const contextValue = { products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
