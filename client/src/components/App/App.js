import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Login from "../Login/Login";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/posts"></Route>
      </Switch>
    </div>
  );
}
