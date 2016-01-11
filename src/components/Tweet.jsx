import React from 'react';
import moment from 'moment';

const Tweet = React.createClass({
  getDefaultProps() {
    return {
      tweet: {}
    };
  },
  renderDate() {
    return (
      <span className="tweet__date">
        {moment(new Date(this.props.tweet.date)).format('LLL')}
      </span>
    );
  },
  renderMedia() {
    return this.props.tweet.media.map((media) => {
      const [httpImage, httpsImage] = media;
      return <img src={httpImage} className="tweet__image" />
    });
  },
  render() {
    return (
      <div className="tweet"
        key={this.props.tweet.id} >
        <p className="tweet__content">
          {this.props.tweet.content}
        </p>
        {this.props.tweet.media && this.renderMedia()}
        {this.renderDate()}
      </div>
    );
  }
});

export default Tweet;
