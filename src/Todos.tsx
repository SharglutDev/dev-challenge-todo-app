import React from "react";

export default function Todos() {
  return (
    <div className="todos-container">
      <ul className="todos-list">
        <li className="todo-item">
          <input className="todo-input" type="checkbox" name="todo" />
          <label className="todo-description" htmlFor="todo">
            Courses
          </label>
        </li>
        <li className="todo-item">
          <input className="todo-input" type="checkbox" name="todo" />
          <label className="todo-description" htmlFor="todo">
            Ménage
          </label>
        </li>
      </ul>
    </div>
  );
}
