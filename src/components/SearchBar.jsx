import React from 'react';

const SearchBar = React.createClass({
  getInitialState() {
    return {
      twitterName: ''
    };
  },
  handleInputChange(event) {
    this.setState({
      twitterName: event.target.value
    });
  },
  search() {
    this.props.onSearch(this.state.twitterName);
  },
  render() {
    return (
      <header className="search-bar">
        <span className="search-bar__greetings">
          Search tweets from any user
        </span>
        <input className="search-bar__input-twitter"
          type="text"
          placeholder="username"
          onChange={this.handleInputChange} />
        <button className="search-bar__search-button"
          onClick={this.search}>
          Search
        </button>
        <span className="search-bar__at-placeholder">@</span>
      </header>
    );
  }
});

export default SearchBar;
