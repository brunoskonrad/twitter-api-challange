import React from 'react';

const Tweet = React.createClass({
  getDefaultProps() {
    return {
      tweet: {}
    };
  },
  render() {
    return (
      <div key={this.props.tweet.id}>
        <p>{this.props.tweet.content}</p>
        <span>{this.props.tweet.date}</span>
      </div>
    );
  }
});

export default Tweet;
