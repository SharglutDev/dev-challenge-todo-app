import React from "react";
import "./App.css";

export default function Filters() {
  return (
    <div>
      <ul className="filter-list">
        <li className="filter-item">All</li>
        <li className="filter-item">Active</li>
        <li className="filter-item">Completed</li>
      </ul>
    </div>
  );
}
