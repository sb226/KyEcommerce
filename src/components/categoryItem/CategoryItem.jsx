import { Link, useNavigate } from "react-router-dom";
import "./CategoryItem.css";

export default function CategoryItem(props) {
  const navigate = useNavigate();
  const { slug, thumbnail, title } = props;
  const categoryPath = `/category/${slug}`;

  function handleCategoryButton() {
    navigate(categoryPath);
  }

  return (
    <div className="category-item-container">
      <Link to={categoryPath}>
        <img src={thumbnail} alt="" />
      </Link>
      <div className="category-item">
        <p>{title}</p>
        <button className="category-item-button" onClick={handleCategoryButton}>
          Explore More
        </button>
      </div>
    </div>
  );
}
