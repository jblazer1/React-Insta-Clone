import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import NewComment from "./NewComment";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      newComment: ""
    };
  }

  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  newCommentHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    if (this.state.comments === "") {
      alert("You have to enter a  comment you igit!");
    } else {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            username: "NewUser",
            text: this.state.newComment
          }
        ],
        newComment: ""
      });
    }
  };

  render() {
    return (
      <div className="comment-container">
        {this.state.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
        <NewComment
          addNewComment={this.addNewComment}
          newCommentHandler={this.newCommentHandler}
          newComment={this.state.newComment}
        />
      </div>
    );
  }
}

export default CommentSection;

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
};
