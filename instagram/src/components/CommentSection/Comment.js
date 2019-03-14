import React from "react";

const Comment = props => {
  console.log(props.comments);
  return (
    <>
      {props.comment.comments.map((comment, index) => (
        <div>
          {comment.username} {comment.text}
        </div>
      ))}
    </>
  );
};

export default Comment;
