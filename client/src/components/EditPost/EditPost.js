import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./EditPost.css";
import { fetchSinglePost, editPost, deletePost } from "../../redux/postsSlice";

export default function EditPost(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.userId);
  const [loaded, setLoaded] = useState(false);
  const post = useSelector((state) => state.posts);
  const [inputVal, setInputVal] = useState("");
  const history = useHistory();
  const [deleteCheck, setDeleteCheck] = useState(false);

  useEffect(() => {
    dispatch(fetchSinglePost(props.match.params.id)).then((response) => {
      setLoaded(true);
      setInputVal(response.payload.body);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      editPost({ id: props.match.params.id, inputVal })
    );
    if (response.type === "posts/editPost/fulfilled") history.push("/");
  };

  const handleDelete = async () => {
    if (!deleteCheck) {
      const delBtn = document.querySelector(".post-delete");
      delBtn.innerText = "Are you sure?";
      delBtn.style.backgroundColor = "rgb(189, 0, 0)";
      delBtn.style.color = "aliceblue";
      setDeleteCheck(true);
    } else {
      const response = await dispatch(deletePost(props.match.params.id));
      if (response.type === "posts/deletePost/fulfilled") history.push("/");
    }
  };

  if (loaded) {
    if (userId === post[0].user_id) {
      return (
        <div className="edit-post-container">
          <h2>Edit Post</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              rows="10"
              cols="40"
              className="edit-post-input"
            />
            <br />
            <button type="submit" className="post-edit post-edit-submit">
              Edit
            </button>
          </form>
          <button className="post-edit post-delete" onClick={handleDelete}>
            Delete Post
          </button>
        </div>
      );
    }

    return (
      <div className="edit-post-container">
        <h2>This is not your post! Have you logged in?</h2>
        <p>{post[0].body}</p>
      </div>
    );
  }
  return null;
}
