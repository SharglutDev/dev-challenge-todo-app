import React, { ChangeEvent } from "react";
import { TodoType } from "./App";

export default function Input({
  task,
  setTask,
  todos,
  setTodos,
}: {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) {
  const handleChange = (e: ChangeEvent) => {
    setTask((e.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    task.length !== 0 &&
      setTodos((todos) => [
        ...todos,
        { description: task, isCompleted: false },
      ]);
    setTask("");
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        placeholder="add details"
        value={task}
        onChange={handleChange}
      />
      <button className="input-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
