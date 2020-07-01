import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Posts.css";
import PostInput from "../PostInput/PostInput";
import { fetchPosts, reset } from "../../redux/postsSlice";
import { fetchPostAuthor } from "../../redux/authorsSlice";
import { resetError } from "../../redux/errorSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const author = useSelector((state) => state.author);
  const [pageNum, setPageNum] = useState(1);
  const error = useSelector((state) => state.error);
  const errorMessage = document.querySelector(".post-error");
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    dispatch(resetError());
    dispatch(reset());
    dispatch(fetchPosts(pageNum));
  }, []);

  useEffect(() => {
    let uniqueIds = [...new Set(posts.map((post) => post.user_id))];
    for (let item of uniqueIds) dispatch(fetchPostAuthor(item));
  }, [posts]);

  useEffect(() => {
    if (error) {
      errorMessage.className = "post-error post-error-active";
    }
  }, [error]);

  return (
    <div className="posts-container">
      {isLoggedIn ? (
        <PostInput />
      ) : (
        <p className="post-login-message">Log in or register to make a post</p>
      )}

      {posts.map((post) => {
        return (
          <div key={post.id} className="post-container">
            <p className="post-body">{post.body}</p>
            <p className="post-author">@{author[post.user_id]}</p>
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
