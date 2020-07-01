import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PostInput.css";
import { addPost } from "../../redux/postsSlice";

export default function PostInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.userId);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ body: inputValue, user_id: userId }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="post-input"
        placeholder="What's on your mind?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="post-submit">Post</button>
    </form>
  );
}
