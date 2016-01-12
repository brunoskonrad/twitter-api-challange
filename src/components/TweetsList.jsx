import React from 'react';
import Tweet from 'components/Tweet.jsx';

const TweetsList = React.createClass({
  getDefaultProps() {
    return {
      tweets: []
    };
  },
  renderTweets() {
    return this.props.tweets.map((tweet) => {
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
