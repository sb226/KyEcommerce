import { useState, useEffect } from "react";
import { fetchProducts } from "../assets/data";
import CategoryItem from "../categoryItem/CategoryItem";
import "./CategoryList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowRight from "../assets/arrow-right-solid.svg";
import arrowLeft from "../assets/arrow-left-solid.svg";
import category_data from "../assets/cat-data";

export default function CategoryList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProduct() {
    setLoading(true);
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) {
    return <div>Loading data... Please wait.</div>;
  }

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={arrowRight} alt="" className="arrows" />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={arrowLeft} alt="" className="arrows" />
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="category-list-container">
      <h1>SHOP BY CATEGORY</h1>
      <hr />
      <div className="category-list">
        <Slider {...settings}>
          {category_data.map((item, index) => (
            <CategoryItem
              key={index}
              thumbnail={item.image}
              title={item.name}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
