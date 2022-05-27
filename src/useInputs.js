import React from "react";
import { useState } from "react";

export function useInputs() {
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
  

  function onLogin() {
    console.log(data);
  }
  return {
    username: handleInputChange,
    password: handleInputChange,
    remember: handleInputChange,
    onLogin: onLogin,
    data: data,
  };
}
