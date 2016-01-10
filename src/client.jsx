import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from 'components/Tweet.jsx';

const App = React.createClass({
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
    console.log(this.state.tweets);
    return (
      <div>
        <h1>Hello World</h1>
        {this.renderTweets()}
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
