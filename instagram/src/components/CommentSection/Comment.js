import React from "react";
import "./commentsection.css";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div className="comment-inner-container">
      <span>{props.comment.username}</span> {props.comment.text}
    </div>
  );
};

export default Comment;

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
