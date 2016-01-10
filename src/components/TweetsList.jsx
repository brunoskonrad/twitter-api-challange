import React from 'react';
import Tweet from 'components/Tweet.jsx';

const TweetsList = React.createClass({
  getInitialState() {
    return {
      tweets: []
    };
  },
  componentDidMount() {
    fetch('/tweets')
      .then((response) => {
        return response.json();
      })
      .then((tweets) => {
        this.setState({
          tweets
        });
      });
  },
  renderTweets() {
    return this.state.tweets.map((tweet) => {
      console.log('tweet');
      return <Tweet key={tweet.id} tweet={tweet} />;
    });
  },
  render() {
    return (
      <div className="tweets-list">
        {this.renderTweets()}
      </div>
    );
  }
});

export default TweetsList;
