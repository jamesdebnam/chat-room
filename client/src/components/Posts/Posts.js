import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Posts.css";
import PostInput from "../PostInput/PostInput";
import { fetchPosts, reset } from "../../redux/postsSlice";
import { fetchPostAuthor } from "../../redux/authorsSlice";
import { resetError } from "../../redux/errorSlice";
import editIcon from "./edit.svg";

export default function Posts() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);
  const author = useSelector((state) => state.author);
  const error = useSelector((state) => state.error);
  const login = useSelector((state) => state.login);

  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    // Resets everything and fetches first page of posts on mount
    dispatch(resetError());
    dispatch(reset());
    dispatch(fetchPosts(pageNum));
  }, []);

  useEffect(() => {
    // When posts change, fetches usernames from their ids and maps them to the posts
    let uniqueIds = [...new Set(posts.map((post) => post.user_id))];
    for (let item of uniqueIds) dispatch(fetchPostAuthor(item));
  }, [posts]);

  useEffect(() => {
    const errorMessage = document.querySelector(".post-error");
    // On a new error, the classname is changed of the error to give it styling
    if (error) {
      errorMessage.className = "post-error post-error-active";
    }
  }, [error]);

  return (
    <div className="posts-container">
      {login.isLoggedIn ? (
        <PostInput />
      ) : (
        <p className="post-login-message">Log in or register to make a post</p>
      )}

      {posts.map((post) => {
        if (post.user_id === login.userId) {
          return (
            <div key={post.id} className="post-container">
              <p className="post-body">{post.body}</p>
              <Link to={`/user/${post.user_id}`}>
                <p className="post-author">@{author[post.user_id]} (you)</p>
              </Link>
              <Link to={`/post/${post.id}`}>
                <button className="post-edit">
                  <img src={editIcon} />
                </button>
              </Link>
            </div>
          );
        }
        return (
          <div key={post.id} className="post-container">
            <p className="post-body">{post.body}</p>
            <Link to={`/user/${post.user_id}`}>
              <p className="post-author">@{author[post.user_id]}</p>
            </Link>
          </div>
        );
      })}
      <button
        className="posts-next-page"
        onClick={() => {
          dispatch(fetchPosts(pageNum + 1));
          setPageNum(pageNum + 1);
        }}
      >
        Load more posts
      </button>
      <p className="post-error">{error}</p>
    </div>
  );
}
