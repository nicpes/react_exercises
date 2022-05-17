import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={28} />
        <Counter
          initialValue={0}
          incrementAmount={1}
          incrementInterval={1000}
        />
        <ClickCounter />
      </div>
    );
  }
}
