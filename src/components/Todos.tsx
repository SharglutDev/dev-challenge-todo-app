import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import Input from "../models/Input";

interface TodoProps {
  allTodos: string[];
  activeTodos: string[];
  filter: string;
  completedTodos: string[];
  setCompletedTodos: Dispatch<SetStateAction<string[]>>;
  setActiveTodos: Dispatch<SetStateAction<string[]>>;
}

const Todos = (props: TodoProps) => {
  let filteredTodos: string[] = [...props.allTodos];

  if (props.filter === "Active") {
    filteredTodos = [...props.activeTodos];
  }
  if (props.filter === "Completed") {
    filteredTodos = [...props.completedTodos];
  }

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    // let updatedCompletedTodo: string[]
    if (e.currentTarget.checked) {
      props.setCompletedTodos([
        ...props.completedTodos,
        ...props.allTodos.filter((todo) => todo === e.currentTarget.value),
      ]);
      props.setActiveTodos(
        [...props.activeTodos].filter((todo) => todo !== e.currentTarget.value)
      );
    } else {
      props.setCompletedTodos(
        [...props.completedTodos].filter(
          (todo) => todo !== e.currentTarget.value
        )
      );
      props.setActiveTodos([
        ...props.activeTodos,
        ...props.allTodos.filter((todo) => todo === e.currentTarget.value),
      ]);
    }
  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {filteredTodos.map((todo, index) => (
          <li key={`${todo}-${index}`} className="todo-item">
            <Input
              inputType="checkbox"
              inputName="todo"
              className="todo-input"
              value={todo}
              handleChange={handleCheck}
            />
            <label className="todo-description" htmlFor="todo">
              {todo}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
