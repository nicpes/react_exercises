import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { Githubuser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUser2 } from "./GithubUser2";

export function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Welcome name="nico" />} />
        <Route path="click-counter" element={<ClickCounter />} />
        <Route
          path="*"
          element={
            <div>
              <p>Not Found</p>
            </div>
          }
        />
        <Route path="users" element={<GithubUserList />}>
          <Route path=":name" element={<ShowGithubUser />} />
        </Route>
      </Routes>
      <Link to="/">Home</Link> <br />
      <Link to="/click-counter">Click Counter</Link> <br />
      <Link to="/users">GitHubUserList</Link>
    </div>
  );
}
