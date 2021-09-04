import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const title = useSelector(({ formReducer }) => formReducer.posts.title);
  const body = useSelector(({ formReducer }) => formReducer.posts.message);

  return (
    <div>
      <h1>
        Navbar {title} {body}
      </h1>
    </div>
  );
};

export default Navbar;
