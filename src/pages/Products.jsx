import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrum/Breadcrum";
import { fetchProducts } from "../components/assets/data";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
import DescriptionBox from "../components/descriptionBox/DescriptionBox";

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

  // Standard breadcrumb for this page
  let items = [
    { label: "Home", link: "/" },
    { label: "Shop", link: "/" },
    { label: `${product.category}`, link: `/category/${product.category}` },
    { label: `${product.title}` },
  ];
  return (
    <div>
      <Breadcrum crumbs={items} />
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
    </div>
  );
}
