import React from "react";
import "./searchbar.css";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <i className="fab fa-instagram" />
      <p className="insta-written-logo">Instagram</p>
      <form className="form">
        <input
          className="search-input"
          type="text"
          name="searchbar"
          placeholder="search here"
        />
      </form>
      <i className="far fa-compass" />
      <i className="far fa-heart" />
      <i className="far fa-user" />
    </div>
  );
};

export default SearchBar;
