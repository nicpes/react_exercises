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

const onLogin = (state) => {
  return console.log(state);
};

export class App extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Provider value={"it"}>
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
      </div>
    );
  }
}
