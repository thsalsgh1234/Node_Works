import React from "react";
import logo from "./logo.svg";
import "./App.css";
// component를 사용하기 위해서 import 하기
import RCC from "./component/RCC";
import RSC from "./component/RSC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>안녕하세요</p>
        <RCC />
        <RSC />
      </header>
    </div>
  );
}

export default App;
