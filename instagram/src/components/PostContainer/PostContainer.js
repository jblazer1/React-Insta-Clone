import React from "react";

import "./postcontainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PostLikes from "./PostLikes";
import PropTypes from "prop-types";

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

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};
