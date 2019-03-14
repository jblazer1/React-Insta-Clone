import React from "react";

const PostLikes = props => {
  return (
    <div className="post-likes">
      <i className="far fa-heart" />
      <i class="far fa-comment" />
      <p>{props.post.likes} likes</p>
    </div>
  );
};

export default PostLikes;
