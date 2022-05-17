import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Nico</strong>} age={28} />
      </div>
    );
  }
}
