import React from 'react';
import SearchBar from 'components/SearchBar.jsx';
import TweetsList from 'components/TweetsList.jsx';
import Footer from 'components/Footer.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      tweets: []
    };
  },

  searchTweets(twitterName) {
    this.setState({
      tweets: [],
      isLoading: true,
      error: false,
      lastSearch: twitterName
    });
    fetch(`/tweets/${twitterName}`)
      .then((response) => {
        return response.json();
      })
      .then((tweets) => {
        if (tweets.length === 1 && tweets[0].hasOwnProperty('code')) {
          return this.setState({
            tweets: [],
            isLoading: false,
            error: true
          });
        }

        this.setState({
          tweets,
          isLoading: false,
          error: false
        });
      });
  },

  renderLoadingTweets() {
    return (<div className="app__loading"></div>);
  },

  renderError() {
    return (
      <p className="app__error">
        User {this.state.lastSearch} not found
      </p>
    );
  },

  render() {
    return (
      <div className="app">
        <SearchBar onSearch={this.searchTweets} />
        {this.state.tweets.length > 0 &&
          <TweetsList tweets={this.state.tweets} />}
        {this.state.isLoading && this.renderLoadingTweets()}
        {this.state.error && this.renderError()}
        <Footer />
      </div>
    );
  }
});

export default App;
