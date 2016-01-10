import Tweet from 'components/Tweet.jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import fixture from 'fixtures/tweet.json';

describe('Test the Tweet Component', () => {
  const tweet = ReactTestUtils.renderIntoDocument(
    <Tweet tweet={fixture} />);

  it('should render the `Hello World` tweet content properly', () => {
    const content = ReactTestUtils.findRenderedDOMComponentWithClass(
      tweet, 'tweet__content');
    expect(content.textContent).toEqual('Hello World');
  });

  it('should render the tweet\'s date/time', () => {
    const dateTime = ReactTestUtils.findRenderedDOMComponentWithClass(
      tweet, 'tweet__date');
    expect(dateTime.textContent).toEqual('January 8, 2016 9:22 PM');
  });
});
