import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Root } from "./Root";
import { store } from "./state/Store";
import { counterReducer, incrementCounter } from "./state/CounterReducer";
import { addTodo, removeTodo, editTodo } from "./state/TodosReducer";

//ReactDOM.render(<Root />, document.querySelector("#root"));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo({ title: "Workout", id: 1, completed: "true" }));
store.dispatch(addTodo({ title: "Wash the car", id: 2, completed: "true" }));
store.dispatch(
  addTodo({ title: "Complete exercises", id: 3, completed: "false" })
);
store.dispatch(editTodo(1, { completed: "false" }));
store.dispatch(editTodo(3, { completed: "true" }));
store.dispatch(removeTodo(2));
