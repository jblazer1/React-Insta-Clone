import React from "react";
import Comment from "./Comment";

const CommentSection = props => {
  //   console.log(props);
  return (
    <div>
      {props.comments.map(comment => (
        <Comment key={comment.username} comment={comment} />
      ))}
    </div>
  );
};

export default CommentSection;
