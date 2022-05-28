import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export function CarDetails({ initialData }) {
  const modelRef = useRef();
  const dataRef = useRef();
  const colorRef = useRef();

  function handleInputModel(event) {
    event.preventDefault();
    modelRef.current.value = event.target.value;
  }
  function handleInputYear(event) {
    event.preventDefault();
    dataRef.current.value = event.target.value;
  }
  function handleInputColor(event) {
    event.preventDefault();
    colorRef.current.value = event.target.value;
  }

  return (
    <div>
      <form>
        <input
          onChange={handleInputModel}
          ref={modelRef}
          defaultValue={initialData.model}
          name="model"
        />
        <input
          onChange={handleInputYear}
          ref={dataRef}
          defaultValue={initialData.year}
          name="year"
        />
        <input
          onChange={handleInputColor}
          ref={colorRef}
          defaultValue={initialData.color}
          name="color"
        />
      </form>
    </div>
  );
}
