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

  useEffect(() => {
    dispatch(fetchSinglePost(props.match.params.id)).then((response) => {
      setLoaded(true);
      setInputVal(response.payload.body);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      editPost(props.match.params.id, { body: inputVal })
    );
    if (response.type === "posts/editPost/fulfilled") history.push("/");
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
            />
            <button type="submit">Edit</button>
          </form>
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
