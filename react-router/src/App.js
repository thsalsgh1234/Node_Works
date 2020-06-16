import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainNav from "./MainNav";

// LongComponent as Component
// 이미 존재하는 컴포넌트의 이름이 너무 길어서 사용하기가 불편하니깐 간략하게 만들어서 사용
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// 3개의 page를 import하여 component로 설정
import Home from "./pages/home";
import BBs from "./pages/bbs";
import Login from "./pages/login";
import BBsList from "./pages/bbsList";

/*
  Router
  Route로 설정된 컴포넌트를 요청된 path에 따라 교체하여 보여주는 영역
  Route에 설정된 path는 웹브라우저 주소창에 URL중에
  mapping path에 따라 컴포넌트를 교체하여 보여준다

  Route의 path에는 설정하는 규칙이 있다.
  기본은  "/"를 기준으로 모두 분해하여 각각의 요청 규칙으로 삼는다.

  만약 /bbs 라고 요청을 하면 "/"로 한번요청, /bbs로 또 한번 요청하는 결과가 되어
  두개의 Route를 모두 보여주게 된다.
  "/"" 요청과 /bbs 요청이 같이 있을 경우
  "/" 요청에 대하여 exact 키워드를 부착하여
  /bbs 요청이 있을경우는 "/"" 요청을 무시하도록 설정해야한다.
*/

function App() {
  return (
    <div className="container-fluid">
      <header className="jumbotron text-center">
        <h3>React Router DOM</h3>
        <input placeholder="아무거나 입력"></input>
      </header>
      <Router>
        <MainNav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/bbs/list" component={BBsList} />
          <Route path="/bbs/:name" component={BBs} />
          <Route path="/bbs" component={BBs} />
        </Switch>
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
