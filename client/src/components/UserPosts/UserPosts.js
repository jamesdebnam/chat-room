import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserPosts } from "../../redux/postsSlice";
import "./UserPosts.css";
import { fetchPostAuthor } from "../../redux/authorsSlice";

export default function UserPosts(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const user = useSelector(
    (state) => state.author[Number(props.match.params.id)]
  );

  useEffect(() => {
    if (!user) {
      dispatch(fetchPostAuthor(Number(props.match.params.id)));
    }
    dispatch(fetchUserPosts({ user_id: Number(props.match.params.id) }));
  }, []);
  return (
    <div className="user-posts-container">
      <h1 className="username-title">@{user}</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className="post-container">
            <p className="post-body">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
