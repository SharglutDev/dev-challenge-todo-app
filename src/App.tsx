import { useState } from "react";
import "./App.css";
import "./index.css";
import Filters from "./components/Filters";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [allTodos, setAllTodos] = useState<string[]>([]);
  const [activeTodos, setActiveTodos] = useState<string[]>([]);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  // const [checked, toggleChecked] = useState<boolean>(false);

  return (
    <div className="container">
      <Header />
      <Filters filter={filter} setFilter={setFilter} />
      <TodoForm
        task={task}
        setTask={setTask}
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
      />
      <Todos
        allTodos={allTodos}
        activeTodos={activeTodos}
        setActiveTodos={setActiveTodos}
        filter={filter}
        setCompletedTodos={setCompletedTodos}
        completedTodos={completedTodos}
      />
      <div></div>
    </div>
  );
}

export default App;
