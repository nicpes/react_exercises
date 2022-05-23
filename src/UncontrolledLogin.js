import React from "react";
import { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.userInputRef = createRef();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    console.log({ username, password, remember });
  };

  componentDidMount() {
    this.userInputRef.current.focus();
  }
  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username" ref={this.userInputRef}></input>
          <input name="password" type="password"></input>
          <input name="remember" type="checkbox"></input>
          <button type="submit">uncontrolled login</button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}
