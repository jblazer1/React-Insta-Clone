import React from "react";

const Comment = props => {
  console.log(props);
  return <div>{props.comment.username}</div>;
};

export default Comment;
