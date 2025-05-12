import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import { fetchProducts } from "../components/assets/data";

export default function Product() {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      setProduct(products.find((i) => i.id === Number(productId)));
    } else {
      async function getProduct() {
        const data = await fetchProducts();
        setProduct(data.find((i) => i.id === Number(productId)));
      }
      getProduct();
    }
  }, [products, productId]);

  if (!product) {
    return <></>;
  }

  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
    </div>
  );
}
