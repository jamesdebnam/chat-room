import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchUserLogin } from "../../redux/reducers";

export default function Login() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserLogin(input));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
