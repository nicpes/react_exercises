import React from "react";

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="nico" />} />
      </Routes>
    </div>
  );
}
