import React, { useEffect, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function Githubuser({ name }) {
const {data} = useGithubUser(name)
  return <div><p>GITHUB USER</p>{data && <h1>{data.name}</h1>}</div>;
}
