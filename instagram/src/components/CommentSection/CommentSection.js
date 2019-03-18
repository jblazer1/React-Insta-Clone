import React from "react";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: ""
    };
  }

  // newCommentHandler = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  addNewComment = (event, index) => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.newComment
        }
      ],
      newComment: ""
    });
  };

  render() {
    console.log(this.state.comments);
    return (
      <div className="comment-container">
        {this.state.comments.map(comment => (
          <div className="comment-inner-container" key={comment.id}>
            <p>
              <span>{comment.username}</span> {comment.text}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentSection;
