import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Filters from "./Filters";
import Header from "./Header";
import Input from "./Input";
import Todos from "./Todos";

export interface TodoType {
  description: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [task, setTask] = useState<string>("");
  const [classActive, setClassActive] = useState<string>("All");
  const [checked, toggleChecked] = useState<boolean>(false);

  return (
    <div className="container">
      <Header />
      <Filters classActive={classActive} setClassActive={setClassActive} />
      <Input task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
      <Todos
        todos={todos}
        checked={checked}
        toggleChecked={toggleChecked}
        classActive={classActive}
      />
    </div>
  );
}

export default App;
