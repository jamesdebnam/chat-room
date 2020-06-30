import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Posts.css";
import { fetchPosts } from "../../redux/postsSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="posts-container">
      {state.map((post) => {
        return (
          <div className="post-container">
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
