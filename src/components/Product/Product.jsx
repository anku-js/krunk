import "./Product.css";
import { LuSlidersHorizontal } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa6";

export default function Product() {
  const tags = ["Clutch", "Fabric lining", "Baggit", "Multi Compartment"];
  return (
    <div className="product-container">
      <div className="popular-tags">
        <p className="popular-tags-heading">Popular tags for handbag</p>
        <div className="tag-list">
          {tags.map((tag, index) => {
            return (
              <p key={index} className="tag">
                {tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className="chatbot">
        <div className="chatbot-message">
          <div className="product-suggestion">
            <div className="product">
              <img
                src="product1.png"
                className="product-image"
                alt="product image"
              />
              <div className="description">
                <p className="products-on-timpu">
                  Bags on <span className="company">Timpu</span>{" "}
                  <img src="vector.png" className="vector" />
                </p>
                <p className="product-count">
                  1123 products <FaChevronRight />
                </p>
              </div>
            </div>
            <p className="chat-message">
              Or set filter and help us choose the best bag for you.
            </p>
          </div>
          <p className="message-time">4:48 PM</p>
        </div>
        <div className="filters">
          <div className="filters-nav">
            <p className="filters-heading">Select filters</p>
            <p className="filter-icon">
              <LuSlidersHorizontal className="icon" />
              Filter
            </p>
          </div>
          <div className="filters-list">
            <p className="filter selected">
              Strap - Long <RxCross2 className="cross" />
            </p>
            <p className="filter">
              Colour
              <RxCross2 className="cross" />
            </p>
            <p className="filter">
              Size
              <RxCross2 className="cross" />
            </p>
            <p className="filter">
              Brand
              <RxCross2 className="cross" />
            </p>
            <p className="filter">
              Material
              <RxCross2 className="cross" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
