import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

const CommentSection = props => {
  // console.log(props.comment);
  return (
    <div className="comment-container">
      {props.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};
