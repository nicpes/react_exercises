import { createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterReducer";
import { todosReducer, addTodo, removeTodo, editTodo } from "./TodosReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);
