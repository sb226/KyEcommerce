import useProduct from "../../hook/useProduct";
import Item from "../item/Item";
import "./RelatedProduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function RelatedProduct() {
  const { products } = useProduct();

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronRight size={20} style={{ color: "black" }} />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronLeft size={20} style={{ color: "black" }} />
      </div>
    );
  };

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="related-products-container">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        <Slider {...settings}>
          {products.slice(0, 8).map((item, index) => (
            <Item
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
