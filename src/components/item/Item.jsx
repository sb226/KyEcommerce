import "./Item.css";

export default function Item(props) {
  let discountPercentage = props.discountPercentage;
  let newPrice = discountPercentage
    ? props.price - (props.price * discountPercentage) / 100
    : null;

  return (
    <div className="item-container">
      <img src={props.thumbnail} alt="" />
      <p>{props.title}</p>
      <div className="item-prices">
        {newPrice !== null && (
          <div className="item-new-price">${newPrice.toFixed(2)}</div>
        )}
        <div
          className={
            props.discountPercentage
              ? "item-original-price-with-discount"
              : "item-original-price"
          }
        >
          ${props.price}
        </div>
      </div>
    </div>
  );
}
