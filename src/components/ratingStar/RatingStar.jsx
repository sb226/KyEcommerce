import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import "./RatingStar.css";

export default function RatingStar({ rating, size = 25 }) {
  const maxStar = 5;
  return (
    <div className="star-rating-container">
      {[...Array(Math.floor(rating))].map((_) => (
        <IoIosStar size={size} />
      ))}
      {rating % 1 >= 0.5 ? (
        <IoIosStarHalf size={size} />
      ) : (
        <IoIosStarOutline size={size} />
      )}
      {[...Array(Math.floor(maxStar - rating))].map((_) => (
        <IoIosStarOutline size={size} />
      ))}
    </div>
  );
}
