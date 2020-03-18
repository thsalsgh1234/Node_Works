import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
// import PlushMain from "./plusNumber/plusMain";
// import PlushMain from "./plusNumber/plusMain_01";
// import PlusMain from "./plusNumber/plusMain_04";
import Layout from "./layout/LayoutMain_01";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Layout />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
