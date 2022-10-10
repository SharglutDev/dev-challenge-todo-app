import React, { ChangeEvent } from "react";

export default function Input({
  task,
  setTask,
  todos,
  setTodos,
}: {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const handleChange = (e: ChangeEvent) => {
    setTask((e.target as HTMLInputElement).value);
  };

  const handleClick = () => {
    task.length !== 0 && setTodos([...todos, task]);
  };

  return (
    <div className="input-container">
      <input
        className="input-field"
        type="text"
        placeholder="add details"
        onChange={handleChange}
      />
      <button className="input-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
