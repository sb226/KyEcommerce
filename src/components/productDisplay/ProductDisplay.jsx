import { useState } from "react";
import RatingStar from "../ratingStar/RatingStar";
import "./ProductDisplay.css";

export default function ProductDisplay(props) {
  const [imageIndex, setImageIndex] = useState(0);
  const { product } = props;
  const {
    discountPercentage,
    images,
    title,
    rating,
    description,
    category,
    tags,
    price,
  } = product;

  // This forces discountPercentage to  boolean
  const hasDiscount = !!discountPercentage;
  let newPrice = hasDiscount
    ? price - (price * discountPercentage) / 100
    : null;

  const isNewPrice = newPrice !== null && "productdisplay-right-price-new";
  const isDiscount = hasDiscount && "productdisplay-right-price-discount";

  return (
    <div className="productdisplay-container">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              onClick={() => setImageIndex(index)}
            />
          ))}
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-img-main"
            src={images[imageIndex]}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{title}</h1>
        <div className="productdisplay-rating">
          <RatingStar rating={rating} />
          <p>({rating})</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className={isDiscount}>${price}</div>
          <div className={isNewPrice}>${newPrice.toFixed(2)}</div>
        </div>
        <div className="productdisplay-right-description">{description}</div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>
          {category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tag: </span>
          {tags.join(", ")}
        </p>
      </div>
    </div>
  );
}
