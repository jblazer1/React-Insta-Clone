import React from "react";

import "./postcontainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostLikes from "./PostLikes";

const PostContainer = props => {
  return (
    <>
      <div className="post-container">
        <img
          className="thumbnail-image"
          src={props.post.thumbnailUrl}
          alt="users thumbnail"
        />
        {props.post.username}
        <img
          className="full-image"
          src={props.post.imageUrl}
          alt="users-post"
        />
      </div>
      <div>
        <PostLikes post={props.post} />
      </div>
      <div>
        <CommentSection comments={props.post.comments} />
      </div>
    </>
  );
};

export default PostContainer;
