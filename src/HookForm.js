import React from "react";
import { useInputs } from "./useInputs";

export function HookForm() {
  const { data, username, password, remember, onLogin } = useInputs();
  return (
    <div>
      <p>HOOK FORM</p>
      <input onChange={username} name="username" value={data.username}></input>
      <input
        onChange={password}
        name="password"
        type="password"
        value={data.password}
      ></input>
      <input
        onChange={remember}
        name="remember"
        type="checkbox"
        checked={data.remember}
      ></input>
      <button
        onClick={onLogin}
        disabled={(!data.username || !data.password) ?? true}
      >
        Login
      </button>
    </div>
  );
}
