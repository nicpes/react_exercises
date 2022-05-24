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
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return <div>{Text[language].text}</div>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
