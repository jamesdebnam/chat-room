import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPostAuthor } from "../../redux/authorsSlice";
import { fetchSinglePost } from "../../redux/postsSlice";

export default function EditPost(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.userId);
  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchSinglePost(props.match.params.id));
  });

  return <div></div>;
}
