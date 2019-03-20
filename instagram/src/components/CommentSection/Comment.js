import React from "react";
import "./commentsection.css";

const Comment = props => {
  return (
    <div className="comment-inner-container">
      <span>{props.comment.username}</span> {props.comment.text}
    </div>
  );
};

export default Comment;
