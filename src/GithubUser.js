import React, { useEffect, useState } from "react";

export function Githubuser({ name }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    {
      name &&
        fetch(`https://api.github.com/users/${name}`)
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            setData(json);
          });
    }
  }, [name]);
  return (
    <div>
      <p>GITHUB USER</p>
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
