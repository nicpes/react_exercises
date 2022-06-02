import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Root } from "./Root";
import { store } from "./state/Store";
import { counterReducer, incrementCounter } from "./state/CounterReducer";

//ReactDOM.render(<Root />, document.querySelector("#root"));

store.dispatch(incrementCounter(1));

console.log(store.getState());
