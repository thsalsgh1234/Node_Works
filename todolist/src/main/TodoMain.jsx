import React from "react";
import "./TodoMain.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const ToDoMain = ({ value }) => {
  return (
    <main className="todoTemplete">
      <div className="title">할 일</div>
      <div className="form-controller">
        <TodoForm value={value} />
      </div>
      <div className="todolist-controler">
        <TodoList />
      </div>
    </main>
  );
};

export default ToDoMain;
