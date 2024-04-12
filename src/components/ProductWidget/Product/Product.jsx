import "./Product.css";
import { FaChevronRight } from "react-icons/fa6";

export default function Product({ productInfo }) {
  const { productName, company, productCount } = productInfo;

  return (
    <div className="product">
      <img
        src="product-thumbnail.png"
        className="product-image"
        alt="product image"
      />
      <div className="description">
        <p className={`products-on-${company}`}>
          {productName} on <span className="company">{company}</span>{" "}
          <img src="badge.png" className="bot-badge" />
        </p>
        <p className="product-count">
          {productCount} products <FaChevronRight />
        </p>
      </div>
    </div>
  );
}
