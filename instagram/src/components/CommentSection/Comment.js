import React from "react";
import "./commentsection.css";

const Comment = props => {
  return (
    <div>
      <form className="form" onSubmit={props.addNewComment}>
        <input
          className="comment-input"
          type="text"
          name="comments"
          placeholder="Add a comment"
          value={props.newComment}
          onChange={props.newCommentHandler}
        />
      </form>
    </div>
  );
};

export default Comment;
