import React, { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInputChange(event) {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checked" ? checked : value,
      };
    });
  }
  function onlogin() {
    console.log(data);
  }
  return (
    <div>
      <p>Login Function</p>
      <input
        onChange={handleInputChange}
        name="username"
        value={data.username}
      ></input>
      <input
        onChange={handleInputChange}
        name="password"
        type="password"
        value={data.password}
      ></input>
      <input
        onChange={handleInputChange}
        name="remember"
        type="checkbox"
        checked={data.remember}
      ></input>
      <button
        onClick={onlogin}
        disabled={(!data.username || !data.password) ?? true}
      >
        Login
      </button>
    </div>
  );
}
