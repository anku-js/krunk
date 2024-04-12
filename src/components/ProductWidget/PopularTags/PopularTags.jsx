import "./PopularTags.css"
import { FaChevronRight } from "react-icons/fa6";

export default function PopularTags({productInfo, title}) {
  return (
    <div className="popular-tags">
      <p className="popular-tags-heading">{title}</p>
      <div className="tag-list">
        {productInfo?.tags.map((tag, index) => <p key={index} className="tag">{tag}</p>)}
        <FaChevronRight className="slide-right" />
      </div>
    </div>
  );
}
