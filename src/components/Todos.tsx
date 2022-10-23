import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import { TodoType } from "../data/todo";
import Input from "../models/Input";

interface TodoProps {
  filter: string;
  todos: TodoType[];
  setTodos: Dispatch<SetStateAction<TodoType[]>>;
}

const Todos = (props: TodoProps) => {
  let filteredTodos: TodoType[] = [...props.todos];

  if (props.filter === "Active") {
    filteredTodos = filteredTodos.filter((todo) => !todo.isCompleted);
  }
  if (props.filter === "Completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.isCompleted);
  }

  const handleCheck = (id: number) => {
    const updatedTodos = [...props.todos].map((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      return todo;
    });
    props.setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = [...props.todos].filter((todo) => todo.id !== id);

    props.setTodos(updatedTodos);
  };

  const handleDeleteAll = () => {
    const updatedTodos = [...props.todos].filter((todo) => !todo.isCompleted);

    props.setTodos(updatedTodos);
  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-content">
              <Input
                inputType="checkbox"
                inputName="todo"
                className="todo-input"
                value={todo.description}
                checked={todo.isCompleted}
                handleChange={() => handleCheck(todo.id)}
              />
              <label
                className={`todo-description ${
                  todo.isCompleted && `todo-done`
                }`}
                htmlFor="todo"
              >
                {todo.description}
              </label>
            </div>
            {props.filter === "Completed" && (
              <FontAwesomeIcon
                icon={faTrashCan}
                style={{ color: "grey", padding: "0 10px", cursor: "pointer" }}
                onClick={() => handleDeleteTodo(todo.id)}
              />
            )}
          </li>
        ))}
        {props.filter === "Completed" && (
          <button className="btn-delete" onClick={handleDeleteAll}>
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "white", paddingRight: "6px" }}
            />
            delete all
          </button>
        )}
      </ul>
    </div>
  );
};

export default Todos;
