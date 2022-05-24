import React from "react";
import { Age } from "./Age";

export function Welcome(props) {
  return (
    <div className="welcome">
      <p>Welcome {props.name}!</p>
      {props.age > 18 ? <Age age={props.age} /> : <p>You are very young!</p>}
    </div>
  );
}
