import React from "react";

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
