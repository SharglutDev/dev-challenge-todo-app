import { useState } from "react";
import "./App.css";
import "./index.css";
import Filters from "./components/Filters";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { TodoType } from "./data/todo";

function App() {
  const [task, setTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  // const [checked, toggleChecked] = useState<boolean>(false);

  // TODO : repartir sur un objet Todo avec prop name et isCompleted
  const [todos, setTodos] = useState<TodoType[]>([]);

  return (
    <div className="container">
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      <TodoForm
        task={task}
        setTask={setTask}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos filter={filter} todos={todos} setTodos={setTodos} />
      <div></div>
    </div>
  );
}

export default App;
