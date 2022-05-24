import React from "react";
import { LanguageContext } from "./LanguageContext";

const Text = {
  en: {
    text: "The selected language is English",
  },
  it: {
    text: "La lingua selezionata è Italiano",
  },
};

export class DisplayLanguage extends React.Component {
  state = {
    language: "it",
  };
  handleLangueChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {() => {
            return <div>{Text[this.state.language].text}</div>;
          }}
        </LanguageContext.Consumer>
        <select value={this.state.language} onChange={this.handleLangueChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
      </div>
    );
  }
}
