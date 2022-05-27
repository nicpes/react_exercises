import React, { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function Githubuser({ name }) {
  const { data, error, loading } = useGithubUser(name);
  return (
    <div>
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
