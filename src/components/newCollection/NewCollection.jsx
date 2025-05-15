import "./NewCollection.css";
import Item from "../item/Item";
import useProduct from "../../hook/useProduct";

export default function NewCollection() {
  const { products } = useProduct();

  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {products.slice(0, 8).map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              discountPercentage={item.discountPercentage}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
