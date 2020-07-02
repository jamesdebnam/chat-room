import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Posts from "../Posts/Posts";
import UserPosts from "../UserPosts/UserPosts";
import EditPost from "../EditPost/EditPost";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user/:id" component={UserPosts} />
        <Route path="/post/:id" component={EditPost} />
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </div>
  );
}
