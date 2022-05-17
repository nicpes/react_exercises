import React from "react";

export class ClickTracker extends React.Component {
  state = {
    name: "",
  };
  handleClickTracker = (event) => {
    this.setState({ name: event.target.name });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickTracker} name="Button 1">
          1
        </button>
        <button onClick={this.handleClickTracker} name="Button 2">
          2
        </button>
        <button onClick={this.handleClickTracker} name="Button 3">
          3
        </button>
        <h1>The last button pressed is {this.state.name}</h1>
      </div>
    );
  }
}
