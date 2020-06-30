import React from "react";
import { Link } from "react-router-dom";

import LoginLink from "../LoginLink/LoginLink";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="nav-item">
        <h1 className="nav-item__chatty-time">Chatty Time</h1>
      </Link>
      <LoginLink />
    </div>
  );
}
