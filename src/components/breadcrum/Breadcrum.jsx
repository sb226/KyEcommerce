import "./Breadcrum.css";

export default function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      Home &gt; Shop &gt; {product.category} &gt; {product.title}
    </div>
  );
}
