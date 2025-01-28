import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../images/avatar1.jpg";
const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdfsdf`} className="post_author">
      <div className="post_author_avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author_details">
        <h5>By: Sudipto</h5>
        <small>just now</small>
      </div>
    </Link>
  );
};

export default PostAuthor;
