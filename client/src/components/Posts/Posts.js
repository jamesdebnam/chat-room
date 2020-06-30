import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Posts.css";
import { fetchPosts } from "../../redux/postsSlice";
import { fetchPostAuthor } from "../../redux/authorsSlice";

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const author = useSelector((state) => state.author);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    let uniqueIds = [...new Set(posts.map((post) => post.user_id))];
    for (let item of uniqueIds) dispatch(fetchPostAuthor(item));
  }, [posts]);

  return (
    <div className="posts-container">
      {posts
        .slice(0)
        .reverse()
        .map((post) => {
          return (
            <div className="post-container">
              <p className="post-body">{post.body}</p>
              <p className="post-author">@{author[post.user_id]}</p>
            </div>
          );
        })}
    </div>
  );
}
