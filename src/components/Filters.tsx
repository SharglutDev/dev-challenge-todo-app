import React, { Dispatch, SetStateAction, MouseEvent } from "react";

export default function Filters({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setFilter(e.currentTarget.innerHTML);
  };

  return (
    <div>
      <ul className="filter-list">
        <li
          className={`filter-item ${filter === "All" && "active"} `}
          onClick={handleClick}
        >
          All
        </li>
        <li
          className={`filter-item ${filter === "Active" && "active"} `}
          onClick={handleClick}
        >
          Active
        </li>
        <li
          className={`filter-item ${filter === "Completed" && "active"} `}
          onClick={handleClick}
        >
          Completed
        </li>
      </ul>
    </div>
  );
}
