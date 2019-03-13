import React from "react";
import Post from "./Post";
// import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <>
      <div className="post-container">
        {props.post.map(dummy => (
          <Post key={dummy.username} dummy={dummy} />
        ))}
      </div>
    </>
  );
};

export default PostContainer;
