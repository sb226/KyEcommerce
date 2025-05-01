import "./CategoryItem.css";

export default function CategoryItem(props) {
  return (
    <div className="category-item-container">
      <img src={props.thumbnail} alt="" />
      <div className="category-item">
        <p>{props.title}</p>
        <button className="category-item-button">Explore More</button>
      </div>
    </div>
  );
}
