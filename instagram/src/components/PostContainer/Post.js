import React from "react";
import "./post.css";

const Post = props => {
  return (
    <>
      <div className="post">
        <img src={props.dummy.thumbnailUrl} alt="username thumbnail" />
        {props.dummy.username}
      </div>
      <div>
        <img src={props.dummy.imageUrl} alt={props.dummy.imageUrl} />
        <div>{props.dummy.likes} likes</div>
      </div>
    </>
  );
};

export default Post;
