import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";

export default function Product() {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(products.find((i) => i.id === Number(productId)));
  }, [products, productId]);

  if (!product) {
    return <></>;
  }

  // Standard breadcrumb for this page
  let crumbs = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/" },
    { label: `${product.category}`, link: `/category/${product.category}` },
    { label: `${product.title}` },
  ];

  return (
    <div>
      <Breadcrum crumbs={crumbs} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
    </div>
  );
}
