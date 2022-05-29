import React, { useMemo } from "react";

export function FilteredList() {
  const array = [
    { id: 1, age: 15, name: "Bill" },
    { id: 2, age: 22, name: "Nick" },
    { id: 3, age: 28, name: "Marc" },
    { id: 4, age: 12, name: "Luke" },
  ];
  const memoArray = useMemo(() => array.filter((user) => user.age > 18), [array]);

  return (
    <div>
      <p>Filtered List > 18</p>
      <ul>
        {memoArray.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
