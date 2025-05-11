import { useNavigate } from "react-router-dom";
import "./CategoryItem.css";

export default function CategoryItem(props) {
  const navigate = useNavigate();
  const { slug, thumbnail, title } = props;

  function handleCategoryButton() {
    navigate(`/category/${slug}`);
  }

  return (
    <div className="category-item-container">
      <img src={thumbnail} alt="" />
      <div className="category-item">
        <p>{title}</p>
        <button className="category-item-button" onClick={handleCategoryButton}>
          Explore More
        </button>
      </div>
    </div>
  );
}
