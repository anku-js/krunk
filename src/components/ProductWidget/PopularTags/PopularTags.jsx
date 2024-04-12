import "./PopularTags.css"
import { FaChevronRight } from "react-icons/fa6";

export default function PopularTags({productInfo}) {
  return (
    <div className="popular-tags">
      <p className="popular-tags-heading">Popular tags for handbag</p>
      <div className="tag-list">
        {productInfo?.tags.map((tag, index) => {
          return (
            <p key={index} className="tag">
              {tag}
            </p>
          );
        })}
        <div>
          <FaChevronRight className="slide-right" />
        </div>
      </div>
    </div>
  );
}
