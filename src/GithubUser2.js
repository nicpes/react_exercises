import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function GithubUser2(name) {
  const { data, error, loading, handleRefresh } = useGithubUser(name);
  return (
    <div>
      <button onClick={handleRefresh}>Click me</button>
      {loading && <h1>Loading..</h1>}
      {error && <h1>Error</h1>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
}
