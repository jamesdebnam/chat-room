import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./LoginLink.css";
import { logout } from "../../redux/loginSlice";

export default function LoginLink() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  if (login.isLoggedIn) {
    return (
      <div className="logout-container">
        <p className="welcome-text">Welcome, {login.username}</p>
        <Link to="/">
          <button
            className="logout login-btn"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </Link>
      </div>
    );
  }
  return (
    <Link to="/login">
      <button className="login-btn login">Login</button>
    </Link>
  );
}
