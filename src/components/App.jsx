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
      isLoading: true
    });
    fetch(`/tweets/${twitterName}`)
      .then((response) => {
        return response.json();
      })
      .then((tweets) => {
        this.setState({
          tweets,
          isLoading: false
        });
      });
  },

  renderLoadingTweets() {
    return (<div className="app__loading"></div>);
  },

  render() {
    return (
      <div className="app">
        <SearchBar onSearch={this.searchTweets} />
        {this.state.tweets.length > 0 &&
          <TweetsList tweets={this.state.tweets} />}
        {this.state.isLoading && this.renderLoadingTweets()}
        <Footer />
      </div>
    );
  }
});

export default App;
