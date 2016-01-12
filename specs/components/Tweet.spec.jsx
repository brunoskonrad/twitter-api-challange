import Tweet from 'components/Tweet.jsx';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import fixture from 'fixtures/tweet.json';
import fixtureWithMedia from 'fixtures/tweet_with_media.json';

describe('Test the Tweet Component', () => {
  describe('tweet without any media', () => {
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

    it('don\'t have any image rendered', () => {
      const media = ReactTestUtils.scryRenderedDOMComponentsWithClass(
        tweet, 'tweet__image');
      expect(media).toEqual([]);
    });
  });

  describe('tweet with a photo as media', () => {
    const tweet = ReactTestUtils.renderIntoDocument(
      <Tweet tweet={fixtureWithMedia} />);

    it('render one image with a cute cat', () => {
      const media = ReactTestUtils.scryRenderedDOMComponentsWithClass(
        tweet, 'tweet__image');

      expect(media.length).toBe(1);
      expect(media[0].src).toBe(
        'http://cl.jroo.me/z3/W/N/v/e/a.baa-cute-catty-look.jpg');
    });
  });
});
