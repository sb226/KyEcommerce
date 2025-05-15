import { useState } from "react";
import "./DescriptionBox.css";
import RatingStar from "../ratingStar/RatingStar";

export default function DescriptionBox(props) {
  const { product } = props;
  const { description, reviews } = product;
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => setToggle(!toggle);

  return (
    <div className="description-box-container">
      <div className="description-box-nav">
        <div
          className={`description-box-nav-box ${toggle && "fade"}`}
          onClick={toggle ? toggleButton : undefined}
        >
          Description
        </div>
        <div
          className={`description-box-nav-box ${!toggle && "fade"} review`}
          onClick={toggle ? undefined : toggleButton}
        >{`Reviews (${reviews.length})`}</div>
      </div>
      {toggle ? (
        <div className="description-box-ranking">
          {reviews.map((review) => (
            <div className="review-box">
              <RatingStar rating={review.rating} size={20} />
              <p>{review.comment}</p>
              <div>
                <span>By: </span>
                {review.reviewerName}
              </div>
              <div>{new Date(review.date).toLocaleDateString("en-GB")}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="description-box-description">{description}</div>
      )}
    </div>
  );
}
