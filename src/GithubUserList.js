import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const usernames = [];
  const [user, setUser] = useState(usernames);

  function addUser(event) {
    event.preventDefault();
    const userGit = event.target.elements.name.value;
    setUser((usernames) => [...usernames, userGit]);
    console.log(user);
  }

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${user}`}>{user}</Link>
          </li>
        ))}
      </ul>

      <form onSubmit={addUser}>
        <input name="name" type="text"></input>
        <button type="submit">Add User</button>
      </form>
      <Outlet />
    </div>
  );
}
