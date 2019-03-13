import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  return (
    <div>
      {props.post.map(comment => (
        <Comment key={comment.username} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
