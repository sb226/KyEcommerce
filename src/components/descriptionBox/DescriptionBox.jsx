import { useState } from "react";
import "./DescriptionBox.css";

export default function DescriptionBox(props) {
  const { product } = props;
  const { description, reviews } = product;

  return (
    <div className="description-box-container">
      <div className="description-box-nav">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade review">{`Reviews (${reviews.length})`}</div>
      </div>
      <div className="description-box-description">{description}</div>
    </div>
  );
}
