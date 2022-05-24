import React from "react";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { TodoList } from "./TodoList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import { Sum } from "./Sum";
const onLogin = (state) => {
  return console.log(state);
};

export class App extends React.Component {
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
        <select value={this.state.language} onChange={this.handleLangueChange}>
          <option value="en">English</option>
          <option value="it">Italian</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Container title="React Exercises">
          <Hello />
          <Counter
            initialValue={0}
            incrementAmount={1}
            incrementInterval={1000}
          />
          <ClickCounter />
          <ClickTracker />
          <InteractiveWelcome />
          <Login handleState={onLogin} />
          <UncontrolledLogin />
          <TodoList
            render={(todos, handleRemove) => {
              return (
                <div>
                  <ul>
                    {todos.map((todo, index) => (
                      <li ref={this.listRef} key={index}>
                        {todo}
                        <button onClick={() => handleRemove(index)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }}
          ></TodoList>
        </Container>
        <Sum numbers={[1,2,3,4,5]}/>
      </div>
    );
  }
}
