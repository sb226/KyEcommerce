import "./Item.css";

export default function Item(props) {
  const { discountPercentage, price, thumbnail, title } = props;
  let newPrice = discountPercentage
    ? price - (price * discountPercentage) / 100
    : null;

  return (
    <div className="item-container">
      <img src={thumbnail} alt="" />
      <p>{title}</p>
      <div className="item-prices">
        {newPrice !== null && (
          <div className="item-new-price">${newPrice.toFixed(2)}</div>
        )}
        <div
          className={
            discountPercentage
              ? "item-original-price-with-discount"
              : "item-original-price"
          }
        >
          ${price}
        </div>
      </div>
    </div>
  );
}
