import React from 'react';
import SearchBar from 'components/SearchBar.jsx';
import TweetsList from 'components/TweetsList.jsx';

const App = React.createClass({
  getInitialState() {
    return {
      tweets: []
    };
  },

  searchTweets(twitterName) {
    fetch(`/tweets/${twitterName}`)
      .then((response) => {
        return response.json();
      })
      .then((tweets) => {
        this.setState({
          tweets
        });
      });
  },

  render() {
    return (
      <div>
        <SearchBar onSearch={this.searchTweets} />
        {this.state.tweets.length > 0 &&
          <TweetsList tweets={this.state.tweets} />}
      </div>
    );
  }
});

export default App;
