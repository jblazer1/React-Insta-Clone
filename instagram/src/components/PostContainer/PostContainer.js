import React from "react";

// import CommentSection from "../CommentSection/CommentSection";
import "./postcontainer.css";

const PostContainer = props => {
  return (
    <>
      <div className="post-container">
        <img className="thumbnail-image" src={props.post.thumbnailUrl} alt="" />
        <p>{props.post.username}</p>
        <img className="full-image" src={props.post.imageUrl} alt="" />
      </div>
    </>
  );
};

export default PostContainer;
