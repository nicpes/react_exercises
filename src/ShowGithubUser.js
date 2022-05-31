import React from "react";
import { useParams } from "react-router-dom";
import { GithubUser2 } from "./GithubUser2";

export function ShowGithubUser() {
  const { name } = useParams();

  return (
    <div>
      <GithubUser2 name={name} />
    </div>
  );
}
