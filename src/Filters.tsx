import React from "react";
import "./App.css";

export default function Filters({
  classActive,
  setClassActive,
}: {
  classActive: string;
  setClassActive: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setClassActive(e.currentTarget.innerHTML);
  };

  return (
    <div>
      <ul className="filter-list">
        <li
          className={`filter-item ${classActive === "All" && "active"} `}
          onClick={handleClick}
        >
          All
        </li>
        <li
          className={`filter-item ${classActive === "Active" && "active"} `}
          onClick={handleClick}
        >
          Active
        </li>
        <li
          className={`filter-item ${classActive === "Completed" && "active"} `}
          onClick={handleClick}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}
