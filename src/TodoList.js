import React from "react";
import { createRef } from "react";
export class TodoList extends React.Component {
  myRef = createRef();

  state = {
    todos: ["Wash the car", "Clean the house", "Feed the dog"],
    input: [],
  };

  handleItemValue = () => {
    this.setState({ todos: [...this.state.todos, this.myRef.current.value] });
    this.myRef.current.value = "";
  };
  handleResetItems = () => {
    this.setState({
      todos: [],
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo + index}>{todo}</li>
          ))}
        </ul>
        <input name="input" ref={this.myRef}></input>
        <button id="button" onClick={this.handleItemValue}>
          Add
        </button>
        <button onClick={this.handleResetItems}>Reset</button>
      </div>
    );
  }
}
