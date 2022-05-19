import React from "react";
import { createRef } from "react";
export class TodoList extends React.Component {
  myRef = createRef();
  state = {
    todos: ["Wash the car", "Clean the house", "Feed the dog"],
  };

  handleItemValue = () => {
    this.setState({ todos: [...this.state.todos, this.myRef.current.value] });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo + index}>{todo}</li>
          ))}
        </ul>
        <input ref={this.myRef}></input>
        <button id="button" onClick={this.handleItemValue}>
          Add
        </button>
      </div>
    );
  }
}
