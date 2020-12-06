import React from "react";
import TodoList from "./components/Todo.js";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1 className="box" id="heading">
        Todo List
      </h1>
      <div className="box">
        <TodoList />
      </div>
    </div>
  );
}
