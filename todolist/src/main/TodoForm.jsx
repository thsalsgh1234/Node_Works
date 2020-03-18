import React from "react";
import "./TodoForm.css";

const TodoForm = ({ value }) => {
  return (
    <div className="form">
      <input type="text" value={value}></input>
      <div className="todo-insert">추가</div>
    </div>
  );
};

export default TodoForm;
