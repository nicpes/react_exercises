import React, { useState, useEffect } from "react";

export function CounterUE2({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log("i have mounted");
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      console.log("i have unmounted");
      clearInterval(interval);
    };
  }, []);
  return <div>Count: {count}</div>;
}
