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

const onLogin = (state) => {
  return console.log(state);
};

export class App extends React.Component {
  render() {
    return (
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
        <TodoList />
      </Container>
    );
  }
}
