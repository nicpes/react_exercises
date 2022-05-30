import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export function useGithubUser(name) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    {
      name &&
        fetch(`https://api.github.com/users/${name}`)
          .then((response) => {
            if (response.status !== 200) {
              setError(new Error("User not found"));
            }
            return response.json();
          })
          .then((json) => {
            setLoading(false);
            setData(json);
          })
          .catch((error) => {
            setError(error);
          });
    }
  }, [name]);

  return {
    data,
    error,
    loading,
  };
}
