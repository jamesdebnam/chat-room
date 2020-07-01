import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { registerUser } from "../../redux/loginSlice";
import { resetError } from "../../redux/errorSlice";
import "./Register.css";

export default function Register() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(resetError());
  }, []);

  const handleSubmit = async (e) => {
    let errorMessage = document.querySelector(".error");
    errorMessage.className = "error";
    e.preventDefault();
    dispatch(resetError());
    const response = await dispatch(registerUser({ username: input }));
    if (response.type === "login/registerUser/fulfilled") history.push("/");
    else {
      errorMessage.className = "error error-active";
    }
  };
  return (
    <div className="register-container">
      <h1 className="register-title">Register</h1>
      <h2 className="register-subtitle">All you need is a username!</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={input}
          className="register-input"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Username"
        ></input>
        <button className="register-submit" type="submit">
          Register me!
        </button>
      </form>
      <p className="error">{error}</p>
    </div>
  );
}
