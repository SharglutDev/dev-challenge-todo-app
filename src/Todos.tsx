import React from "react";

export default function Todos({ todos }: { todos: string[] }) {
  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input className="todo-input" type="checkbox" name="todo" />
            <label className="todo-description" htmlFor="todo">
              {todo}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
