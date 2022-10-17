import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { TodoType } from "../data/todo";
import Input from "../models/Input";

interface TodoProps {
  allTodos: string[];
  activeTodos: string[];
  filter: string;
  completedTodos: string[];
  setCompletedTodos: Dispatch<SetStateAction<string[]>>;
  setActiveTodos: Dispatch<SetStateAction<string[]>>;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
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
    if (e.currentTarget.checked) {
      let currentCheckbox = [...props.todos].find(
        (todo) => todo.description === e.currentTarget.value
      )
      currentCheckbox && currentCheckbox.isCompleted = true;
    } 
      
    // let updatedCompletedTodo: string[]
    // if (e.currentTarget.checked) {
    //   props.setCompletedTodos([
    //     ...props.completedTodos,
    //     ...props.allTodos.filter((todo) => todo === e.currentTarget.value),
    //   ]);
    //   props.setActiveTodos(
    //     [...props.activeTodos].filter((todo) => todo !== e.currentTarget.value)
    //   );
    // } else {
    //   props.setCompletedTodos(
    //     [...props.completedTodos].filter(
    //       (todo) => todo !== e.currentTarget.value
    //     )
    //   );
    //   props.setActiveTodos([
    //     ...props.activeTodos,
    //     ...props.allTodos.filter((todo) => todo === e.currentTarget.value),
    //   ]);
    // }

  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {props.todos.map((todo, index) => (
          <li key={`${todo}-${index}`} className="todo-item">
            <Input
              inputType="checkbox"
              inputName="todo"
              className="todo-input"
              value={todo.description}
              checked={todo.isCompleted}
              handleChange={handleCheck}
            />
            <label className="todo-description" htmlFor="todo">
              {todo.description}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
