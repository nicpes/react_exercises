const defaultState = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

function incrementCounter() {
  return {
    type: INCREMENT,
    payload: by,
  };
}

function decrementCounter() {
  return {
    type: DECREMENT,
    payload: by,
  };
}
function resetCounter() {
  return {
    type: RESET,
  };
}

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECREMENT: {
      return state - action.payload;
    }
    case RESET: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
}
