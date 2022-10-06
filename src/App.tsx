import React from "react";
import "./App.css";
import "./index.css";
import Filters from "./Filters";
import Header from "./Header";
import Input from "./Input";

function App() {
  return (
    <div className="container">
      <Header />
      <Filters />
      <Input />
    </div>
  );
}

export default App;
