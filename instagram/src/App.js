import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostLikes from "./components/PostContainer/PostLikes";
import CommentSection from "./components/CommentSection/CommentSection";
import Comment from "./components/CommentSection/Comment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      comments: "this is a comment"
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  render() {
    return (
      <div className="App-container">
        <SearchBar />
        {this.state.dummyData.map(entry => {
          return (
            <>
              <PostContainer key={entry.username} post={entry} />
              <PostLikes post={entry} />
              <CommentSection comments={entry.comments} />
              <Comment comments={this.state.comments} />
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
