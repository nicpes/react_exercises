import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleUsernameChange = (event) => {
    const value = event.target.value;

    this.setState({
      username: value,
    });
  };
  handlePasswordChange = (event) => {
    const value = event.target.value;

    this.setState({
      password: value,
    });
  };
  handleRememberChange = (event) => {
    const value = event.target.checked;

    this.setState({
      remember: value,
    });
  };

  handleReset = (event) => {
    this.setState({
      username: "",
      password: "",
      remember: false,
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
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        ></input>
        <input
          name="remember"
          type="checkbox"
          checked={this.state.remember}
          onChange={this.handleRememberChange}
        ></input>

        <button
          name="login"
          disabled={(!this.state.username || !this.state.password) ?? true}
          onClick={() => this.props.handleState(this.state)}
        >
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
