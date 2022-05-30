import React, { useEffect } from "react";
import { useState } from "react";
import { Githubuser } from "./GithubUser";

export function GithubUserList() {
  const usernames = [];
  const [user, setUser] = useState(usernames);

  function addUser(event) {
    event.preventDefault();
    const userGit = event.target.elements.username.value;
    setUser((usernames) => [...usernames, userGit]);
    console.log(user);
  }

  useEffect(()=>{console.log(user)})

  return (
    <div>
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            <Githubuser name={[user]} />
          </li>
        ))}
      </ul>

      <form onSubmit={addUser}>
        <input name="username" type="text"></input>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
