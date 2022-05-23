import React from "react";
import { createRef } from "react";
export class TodoList extends React.Component {
  myRef = createRef();
  listRef = createRef();

  state = {
    todos: ["Wash the car", "Clean the house", "Feed the dog"],
    input: [],
  };

  handleAdditem = (event) => {
    event.preventDefault();
    const todoElement = event.target.elements.todo;
    const todo = todoElement.value;
    this.setState((state) => {
      return { todos: [...state.todos, todo] };
    });
    todoElement.value = "";
    console.log(this.state.todos);
  };
  handleResetItems = () => {
    this.setState({
      todos: [],
    });
  };

  handleRemove = (index) => {
    this.setState((state) => {
      return { todos: state.todos.filter((todo, i) => i !== index) };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li ref={this.listRef} key={index}>
              {todo}
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleAdditem}>
          <input name="todo" ref={this.myRef}></input>
          <button id="button" type="submit">
            Add
          </button>
        </form>
        <button onClick={this.handleResetItems}>Reset</button>
      </div>
    );
  }
}