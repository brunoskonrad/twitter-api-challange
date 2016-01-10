import React from 'react';
import ReactDOM from 'react-dom';
import TweetsList from 'components/TweetsList.jsx';

console.log('TweetsList', TweetsList);

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <TweetsList />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
