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
  render() {
    return (
      <div className="tweet"
        key={this.props.tweet.id} >
        <p className="tweet__content">
          {this.props.tweet.content}
        </p>
        {this.renderDate()}
      </div>
    );
  }
});

export default Tweet;
