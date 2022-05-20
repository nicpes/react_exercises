import React from "react";
import { createRef } from "react";
export class TodoList extends React.Component {
  myRef = createRef();
  listRef = createRef();

  state = {
    todos: ["Wash the car", "Clean the house", "Feed the dog"],
    input: [],
  };

  handleAdditem = () => {
    this.setState({ todos: [...this.state.todos, this.myRef.current.value] });
    this.myRef.current.value = "";
  };
  handleResetItems = () => {
    this.setState({
      todos: [],
    });
  };

  handleRemove = (todo, index) => {
    this.setState({
      todos: this.state.todos.filter((index) => todo !== index),
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li ref={this.listRef} key={index}>
              {todo}
              <button onClick={() => this.handleRemove(todo, index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <input name="input" ref={this.myRef}></input>
        <button id="button" onClick={this.handleAdditem}>
          Add
        </button>
        <button onClick={this.handleResetItems}>Reset</button>
      </div>
    );
  }
}
