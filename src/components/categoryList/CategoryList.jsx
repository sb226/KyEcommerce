import { useState, useEffect } from "react";
import { fetchCategory } from "../assets/cat-data";
import CategoryItem from "../categoryItem/CategoryItem";
import "./CategoryList.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function CategoryList() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getProduct() {
    setLoading(true);
    const data = await fetchCategory();
    setCategory(data);
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
          {category.map((item, index) => (
            <CategoryItem
              key={index}
              thumbnail={item.image}
              title={item.name}
              slug={item.slug}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
