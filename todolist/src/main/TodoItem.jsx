import React from "react";
import "./TodoItem.css";

/*
    className = {`todo-text ${checked && 'checked'}`}
    만약 checked 변수가 true 이면 className="todo-text checked" 라고 붙이고
    false이면 className="todo-text" 만 있을 것이다.

*/
const TodoItem = ({ text, checked }) => {
  return (
    <div className="todo-item">
      <div className="delete-item">&times;</div>
      <div className={`todo-text ${checked && "checked"}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">&#x2713;</div>}
    </div>
  );
};

export default TodoItem;
