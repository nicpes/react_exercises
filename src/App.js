import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { Githubuser } from "./GithubUser";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="nico" />} />
        <Route path="click-counter" element={<ClickCounter />} />
        <Route path="users/:name" element={<Githubuser />} />
        <Route path="*" element={<div><p>Not Found</p></div>} />
      </Routes>
      <Link to="/">Home</Link> <br />
      <Link to="/click-counter">Click Counter</Link> <br />
      <Link to="/users/nicpes">GitHub User</Link>
    </div>
  );
}
