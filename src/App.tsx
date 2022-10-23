import { useState, useEffect } from "react";
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
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    let loadedTodos: TodoType[] = [];
    if (savedTodos) {
      loadedTodos = JSON.parse(savedTodos);
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const jsonedTodos = JSON.stringify(todos);
    localStorage.setItem("todos", jsonedTodos);
  }, [todos]);

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
