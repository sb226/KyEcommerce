import { Link } from "react-router-dom";
import "./Breadcrum.css";
import { FaChevronRight } from "react-icons/fa";

export default function Breadcrum(props) {
  const { crumbs } = props;

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <ul className="breadcrum">
      {crumbs.map((crumb, index) => {
        const disabled = isLast(index);

        return (
          <li key={index}>
            {disabled ? (
              <span>{crumb.label}</span>
            ) : (
              <Link to={crumb.link} className={`breadcrumb-item`}>
                {crumb.label}
              </Link>
            )}

            {!disabled && (
              <FaChevronRight size={10} style={{ marginLeft: "5px" }} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
