import React from "react";

const Comment = props => {
  console.log(props);
  return <div>{props.comments.username}</div>;
};

export default Comment;
