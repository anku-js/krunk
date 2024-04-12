import "./Filters.css";
import { LuSlidersHorizontal } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

export default function Filters({ productInfo }) {
  return (
    <div className="filters-container">
      <div className="filters-heading">
        <p className="select-filters">Select filters</p>
        <p className="filter-icon">
          <LuSlidersHorizontal className="icon" />
          Filter
        </p>
      </div>
      <div className="filters-list">
        {productInfo?.filters.map((filters, i) => {
          return (
            <p
              key={i}
              className={`filter ${
                filters === "Strap - Long" ? "selected" : ""
              }`}
            >
              {filters} <RxCross2 className="cross" />
            </p>
          );
        })}
      </div>
    </div>
  );
}
