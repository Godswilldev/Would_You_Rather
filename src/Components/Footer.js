import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const title = useSelector(({ formReducer }) => formReducer.posts.title);
  const body = useSelector(({ formReducer }) => formReducer.posts.message);

  return (
    <div>
      <h2>
        Footer {title} {body}
      </h2>
    </div>
  );
};

export default Footer;
