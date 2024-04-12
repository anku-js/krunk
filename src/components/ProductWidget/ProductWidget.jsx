import "./ProductWidget.css";
import PopularTags from "./PopularTags/PopularTags";
import Product from "./Product/Product";
import Filters from "./Filters/Filters";

export default function ProductWidget({ productInfo }) {
  return (
    <div className="product-container">
      <PopularTags productInfo={productInfo} />
      <div className="suggestion-by-chatbot">
        <div className="product-suggestion">
          <Product productInfo={productInfo} />
          <p className="chat-message">
            Or set filter and help us choose the best bag for you.
          </p>
        </div>
        <p className="message-time">{productInfo.sentAt}</p>
        <Filters productInfo={productInfo} />
      </div>
    </div>
  );
}
