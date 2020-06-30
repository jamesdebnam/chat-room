import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Posts from "../Posts/Posts";
export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </div>
  );
}
