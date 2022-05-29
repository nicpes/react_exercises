import React from "react";
import { useRef } from "react";

export function CarDetails({ initialData }) {
  const modelRef = useRef(initialData.model);
  const dataRef = useRef(initialData.year);
  const colorRef = useRef(initialData.color);

  return (
    <div>
      <form>
        <input ref={modelRef} defaultValue={modelRef.current} name="model" />
        <input ref={dataRef} defaultValue={dataRef.current} name="year" />
        <input ref={colorRef} defaultValue={colorRef.current} name="color" />
      </form>
    </div>
  );
}
