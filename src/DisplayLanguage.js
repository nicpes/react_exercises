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
            return (
              <div>
                <h1>{Text[language].text}</h1>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
