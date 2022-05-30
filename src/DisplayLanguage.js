import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Text = {
  en: {
    text: "The selected language is English",
  },
  it: {
    text: "La lingua selezionata è Italiano",
  },
};

export function DisplayLanguage(){
  const language = useContext(LanguageContext)
  return <h3>Current language: {Text[language].text}</h3>
}