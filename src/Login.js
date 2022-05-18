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
    console.log(value);
  };
  handlePasswordChange = (event) => {
    const value = event.target.value;

    this.setState({
      password: value,
    });
    console.log(value);
  };
  handleRememberChange = (event) => {
    const value = event.target.checked;

    this.setState({
      remember: value,
    });
    console.log(value);
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
      </div>
    );
  }
}
