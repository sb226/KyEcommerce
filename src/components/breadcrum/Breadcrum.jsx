import "./Breadcrum.css";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <FaChevronRight size={10} /> Shop <FaChevronRight size={10} />{" "}
      {product.category} <FaChevronRight size={10} /> {product.title}
    </div>
  );
}
