import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export function CarDetails({ initialData }) {
  const modelRef = useRef();
  const dataRef = useRef();
  const colorRef = useRef();

  function handleFormChange(event) {
    event.preventDefault();
    modelRef.current.value = "";
    dataRef.current.value = "";
    colorRef.current.value = "";
  }

  return (
    <div>
      <form>
        <input ref={modelRef} defaultValue={initialData.model} name="model" />
        <input ref={dataRef} defaultValue={initialData.year} name="year" />
        <input ref={colorRef} defaultValue={initialData.color} name="color" />
        <button onClick={handleFormChange} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
