import React from "react";

const Comment = props => {
  return (
    <>
      {props.comment.comments.map((comment, index) => (
        <div>
          console.log(comment);
          {comment.username} {comment.text}
        </div>
      ))}
    </>
  );
};

export default Comment;
