import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import "./RatingStar.css";

export default function RatingStar({ rating }) {
  const maxStar = 5;
  const iconSize = 25;
  return (
    <div className="star-rating-container">
      {[...Array(Math.floor(rating))].map((_) => (
        <IoIosStar size={iconSize} />
      ))}
      {rating % 1 >= 0.5 ? (
        <IoIosStarHalf size={iconSize} />
      ) : (
        <IoIosStarOutline size={iconSize} />
      )}
      {[...Array(Math.floor(maxStar - rating))].map((_) => (
        <IoIosStarOutline size={iconSize} />
      ))}
    </div>
  );
}
