import React from "react";
import PropTypes from "prop-types";

const PostLikes = props => {
  return (
    <div className="post-likes">
      <i className="far fa-heart" />
      <i className="far fa-comment" />
      <p>{props.post.likes} likes</p>
    </div>
  );
};

export default PostLikes;

PostLikes.propTypes = {
  post: PropTypes.shape({
    likes: PropTypes.number
  })
};
