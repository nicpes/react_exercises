import { createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = createStore(rootReducer);
