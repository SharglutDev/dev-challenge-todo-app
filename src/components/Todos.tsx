import { ChangeEvent, Dispatch, SetStateAction } from "react";
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

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    let currentCheckbox = [...props.todos].find(
      (todo) => todo.description === e.currentTarget.value
    );
    currentCheckbox &&
      (e.currentTarget.checked
        ? (currentCheckbox.isCompleted = true)
        : (currentCheckbox.isCompleted = false));

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
        {filteredTodos.map((todo, index) => (
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
