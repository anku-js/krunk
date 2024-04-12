import "./ProductWidget.css";
import PopularTags from "./PopularTags/PopularTags";
import Product from "./Product/Product";
import Filters from "./Filters/Filters";

export default function ProductWidget({ productInfo }) {
  return (
    <div className="productWidget-container">
      <PopularTags productInfo={productInfo} title="Popular tags for handbag" />
      <div className="suggestion-by-chatbot">
        <div className="product-suggestion">
          <Product productInfo={productInfo} />
          <p className="additional-info">
            Or set filter and help us choose the best bag for you.
          </p>
        </div>
        <p className="message-time">{productInfo.sentAt}</p>
      </div>
      <Filters productInfo={productInfo} />
    </div>
  );
}
