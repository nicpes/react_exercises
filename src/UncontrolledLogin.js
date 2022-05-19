import React from "react";

export class UncontrolledLogin extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    console.log({ username, password, remember });
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input name="username"></input>
          <input name="password" type="password"></input>
          <input name="remember" type="checkbox"></input>
          <button type="submit">uncontrolled login</button>
          <button type="reset">reset</button>
        </form>
      </div>
    );
  }
}
