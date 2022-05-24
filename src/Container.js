import React from "react";

export class Container extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
