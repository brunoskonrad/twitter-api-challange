import React from 'react';

const Tweet = React.createClass({
  getDefaultProps() {
    return {
      tweet: {}
    };
  },
  renderMedia() {
    return this.props.tweet.media.map((media, index) => {
      const [httpImage, httpsImage] = media;
      return <img src={httpImage} key={index} className="tweet__image" />
    });
  },
  render() {
    return (
      <div className="tweet">
        <p className="tweet__content">
          {this.props.tweet.content}
        </p>
        {this.props.tweet.media && this.renderMedia()}
        <span className="tweet__date">
          {this.props.tweet.date}
        </span>
      </div>
    );
  }
});

export default Tweet;
