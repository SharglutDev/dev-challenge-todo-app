import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Filters from "./Filters";
import Header from "./Header";
import Input from "./Input";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [classActive, toggleClassActive] = useState<boolean>(true);

  return (
    <div className="container">
      <Header />
      <Filters
        classActive={classActive}
        toggleClassActive={toggleClassActive}
      />
      <Input task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
