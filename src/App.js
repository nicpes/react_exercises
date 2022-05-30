import React from "react";

import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="nico" />} />
        <Route path="click-counter" element={<ClickCounter />} />
      </Routes>
    </div>
  );
}
