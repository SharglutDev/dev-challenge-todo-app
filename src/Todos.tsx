import React, { SetStateAction } from "react";
import { TodoType } from "./App";

export default function Todos({
  todos,
  checked,
  toggleChecked,
  classActive,
}: {
  todos: TodoType[];
  checked: boolean;
  toggleChecked: React.Dispatch<SetStateAction<boolean>>;
  classActive: string;
}) {
  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos
          .filter((todo) => todo.isCompleted && classActive === "Completed")
          .map((todo, index) => (
            <li key={index} className="todo-item">
              <input
                className="todo-input"
                type="checkbox"
                name="todo"
                onChange={() => toggleChecked(!checked)}
              />
              <label className="todo-description" htmlFor="todo">
                {todo.description}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}
