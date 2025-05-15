import { createContext } from "react";
import useProduct from "../hook/useProduct";

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const contextValue = useProduct();

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
