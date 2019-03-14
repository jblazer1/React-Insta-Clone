import React from "react";

const CommentSection = props => {
  // console.log(props.comments.username);
  return (
    <div className="comment-container">
      {props.comments.map(comment => (
        <div className="comment-inner-container">
          <p>
            <span>{comment.username}</span> {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
