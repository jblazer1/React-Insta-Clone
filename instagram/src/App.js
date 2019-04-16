import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import gobblygook from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
// import PostLikes from "./components/PostContainer/PostLikes";
// import CommentSection from "./components/CommentSection/CommentSection";
// import Comment from "./components/CommentSection/Comment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gooklygobbly: [],
      filteredData: []
    };
  }

  componentDidMount() {
    this.setState({ gooklygobbly: gobblygook, filteredData: gobblygook });
  }

  render() {
    return (
      <>
        <div className="App-container">
          <SearchBar />
          {this.state.gooklygobbly.map(entry => {
            return <PostContainer key={entry.id} post={entry} />;
          })}
        </div>
      </>
    );
  }
}

export default App;
