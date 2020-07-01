import React, { useState } from "react";

import "./PostInput.css";

export default function PostInput() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
