import React from "react";

export function Sum(props) {
  return (
    <div>
      <h1>
        The sum is {props.numbers.reduce((prev, current) => prev + current)}
      </h1>
    </div>
  );
}

Sum.defaultProps = {
  numbers: [1, 2, 3],
};
