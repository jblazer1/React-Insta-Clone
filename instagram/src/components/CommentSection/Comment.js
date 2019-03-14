import React from "react";
import "./commentsection.css";

const Comment = props => {
  return (
    <div>
      <form className="form">
        <input
          className="comment-input"
          type="text"
          name="comments"
          placeholder="Add a comment"
        />
      </form>
    </div>
  );
};

export default Comment;
