import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./LoginLink.css";
import { logout } from "../../redux/loginSlice";

export default function LoginLink() {
  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  // Conditional rendering, whether the user is logged in
  if (login.isLoggedIn) {
    return (
      <div className="logout-container">
        <p className="welcome-text">Welcome, {login.username}</p>
        <Link to={`/user/${login.userId}`} className="my-posts">
          <button className="login-btn login my-posts">My Posts</button>
        </Link>
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
    <div>
      <Link to="/register">
        <button className="login-btn login">Register</button>
      </Link>
      <Link to="/login">
        <button className="login-btn login">Login</button>
      </Link>
    </div>
  );
}
