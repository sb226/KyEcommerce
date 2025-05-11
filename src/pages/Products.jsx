import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";

export default function Product() {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((i) => i.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product}></Breadcrum>
    </div>
  );
}
