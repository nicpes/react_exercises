import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };

  handleUsernameChange = (event) => {
    const value = event.target.value;

    this.setState({
      username: value,
    });
  };
  render() {
    return (
      <div>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        ></input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}
