import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserPosts } from "../../redux/postsSlice";
import "./UserPosts.css";

export default function UserPosts(props) {
  console.log(props.match.params.id);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const user = useSelector(
    (state) => state.author[Number(props.match.params.id)]
  );

  useEffect(() => {
    dispatch(fetchUserPosts({ user_id: Number(props.match.params.id) }));
  }, []);
  return (
    <div className="user-posts-container">
      <h1>{user}</h1>
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
