import { TodoType } from "../data/todo";
import Input from "../models/Input";

interface TodoFormProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export default function TodoForm(props: TodoFormProps) {
  const handleClick = () => {
    let newTodo = { description: props.task, isCompleted: false };
    props.task.length > 0 && props.setTodos([...props.todos, newTodo]);
    // if (props.task.length > 0) {
    //   props.setAllTodos([...props.allTodos, props.task]);
    //   props.setActiveTodos([...props.activeTodos, props.task]);
    // }
    props.setTask("");
  };

  return (
    <div className="input-container">
      <Input
        inputType="text"
        inputName="name"
        handleChange={(e) =>
          props.setTask((e.target as HTMLInputElement).value)
        }
        className="input-field"
        placeholder="add details"
        value={props.task}
      />
      <button className="input-btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}
