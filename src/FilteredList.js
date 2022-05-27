import React, { memo, useMemo, useState } from "react";
const array = [
  { id: 1, age: 15, name: "Bill" },
  { id: 2, age: 22, name: "Nick" },
  { id: 3, age: 28, name: "Marc" },
  { id: 4, age: 12, name: "Luke" },
];
export function FilteredList() {
  const [list, setList] = useState();

  const memoArray = useMemo(
    () =>
      array.filter((user) => {
        return user.age > 18;
      }),
    []
  );

  if (memoArray == true) {
    setList(memoArray);
  }

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
