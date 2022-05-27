import React from "react"
import { useState } from "react";
import { useEffect } from "react";

export function useGithubUser(name){
    const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [name]);

  return {data}
}