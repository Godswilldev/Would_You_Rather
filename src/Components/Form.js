import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePosts } from "../Redux/features/Form/formActions";

const Form = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const name = useSelector(({ formReducer }) => formReducer.posts.title);
  const msg = useSelector(({ formReducer }) => formReducer.posts.message);
  const loading = useSelector(({ formReducer }) => formReducer.loading);

  const posts = {
    title: title,
    message: message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePosts(posts));

    setMessage("");
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Welcome
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <h2>
            {name} {msg}
          </h2>
        )}
      </h2>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="message"
        name="message"
        id="message"
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
