import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchUserLogin } from "../../redux/loginSlice";
import { resetError } from "../../redux/errorSlice";
import "./Login.css";

export default function Login() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.error);

  useEffect(() => {
    // Resets error on mount
    dispatch(resetError());
  }, []);

  const handleSubmit = async (e) => {
    // Resets error message and styling on submit
    let errorMessage = document.querySelector(".error");
    errorMessage.className = "error";
    e.preventDefault();
    dispatch(resetError());
    const response = await dispatch(fetchUserLogin(input));
    // Programmatic navigation if promise is fulfilled, else the error is shown
    if (response.type === "login/fetchUserLogin/fulfilled") history.push("/");
    else {
      errorMessage.className = "error error-active";
    }
  };
  return (
    <div className="login-container">
      <h1 className="login-title">Log In</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          id="username"
          type="text"
          value={input}
          className="login-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Username"
        ></input>
        <button className="login-submit" type="submit">
          Submit
        </button>
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
