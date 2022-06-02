import { createStore } from "redux";
import { counterReducer, incrementCounter } from "./CounterReducer";

export const store = createStore(counterReducer);

store.dispatch(incrementCounter(1));

console.log(store.getState());
