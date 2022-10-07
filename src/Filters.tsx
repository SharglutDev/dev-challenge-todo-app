import React, { EventHandler } from "react";
import "./App.css";

export default function Filters({
  classActive,
  toggleClassActive,
}: {
  classActive: boolean;
  toggleClassActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.classList.add("active");
    toggleClassActive(!classActive);
  };

  return (
    <div>
      <ul className="filter-list">
        <li
          className={`filter-item active ${classActive && "active"} `}
          onClick={handleClick}
        >
          All
        </li>
        <li
          className={`filter-item ${classActive && "active"} `}
          onClick={handleClick}
        >
          Active
        </li>
        <li
          className={`filter-item ${classActive && "active"} `}
          onClick={handleClick}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}
