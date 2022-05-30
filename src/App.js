import React from "react";

import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </div>
  );
}
