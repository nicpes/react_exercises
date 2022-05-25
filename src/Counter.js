import React, { useEffect, useState } from "react";

export function Counter(props, { initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    props.onCounterChange(counter);
  });
  return (
    <div>
      Counter: {counter}
      <button onClick={handleCounterIncrement}>Increment</button>
    </div>
  );
}
