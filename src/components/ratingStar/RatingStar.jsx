import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import "./RatingStar.css";

export default function RatingStar({ rating, size = 25 }) {
  const maxStar = 5;
  return (
    <div className="star-rating-container">
      {[...Array(Math.floor(rating))].map((_, index) => (
        <IoIosStar size={size} key={index} />
      ))}
      {rating % 1 >= 0.5 ? (
        <IoIosStarHalf size={size} />
      ) : (
        <IoIosStarOutline size={size} />
      )}
      {[...Array(Math.floor(maxStar - rating))].map((_, index) => (
        <IoIosStarOutline size={size} key={index} />
      ))}
    </div>
  );
}
