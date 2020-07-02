import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";

import editIcon from "../Posts/edit.svg";
import { fetchUserPosts } from "../../redux/postsSlice";
import { fetchPostAuthor } from "../../redux/authorsSlice";
import "./UserPosts.css";

export default function UserPosts(props) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const currentUser = useSelector((state) => state.login.userId);
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
        if (post.user_id === currentUser) {
          return (
            <div key={post.id} className="post-container">
              <p className="post-body">{post.body}</p>
              <p className="post-timestamp post-author-container">
                ~ {moment.utc(post.timestamp).local().fromNow()}
              </p>
              <Link to={`/post/${post.id}`}>
                <button className="post-edit">
                  <img src={editIcon} />
                </button>
              </Link>
            </div>
          );
        } else {
          return (
            <div key={post.id} className="post-container">
              <p className="post-body">{post.body}</p>
              <p className="post-timestamp post-author-container">
                ~ {moment.utc(post.timestamp).local().fromNow()}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
}
