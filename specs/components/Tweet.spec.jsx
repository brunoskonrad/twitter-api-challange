import Tweet from 'components/Tweet.jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('Test the Tweet Component', () => {
  it('works, please...', () => {
    const fixture = {
      id: 685602466646356000,
      content: 'Hello World',
      date: 'Fri Jan 08 23:22:20 +0000 2016'
    };
    const tweet = ReactTestUtils.renderIntoDocument(
      <Tweet tweet={fixture}/>);
    const content = ReactTestUtils.findRenderedDOMComponentWithTag(
      tweet, 'p');

    expect(content.textContent).toEqual('Hello World');
  });
});
