import React from "react";

const CommentSection = props => {
  console.log(props.comments.username);
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default CommentSection;
