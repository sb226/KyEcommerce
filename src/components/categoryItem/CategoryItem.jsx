import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";

export default function CategoryItem(props) {
  const navigate = useNavigate();

  function handleCategoryButton() {
    navigate(`/category/${props.slug}`);
  }

  return (
    <div className="category-item-container">
      <img src={props.thumbnail} alt="" />
      <div className="category-item">
        <p>{props.title}</p>
        <button className="category-item-button" onClick={handleCategoryButton}>
          Explore More
        </button>
      </div>
    </div>
  );
}
