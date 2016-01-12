var Twitter = require('twitter');
var moment = require('moment');
require('dotenv').load();

function getTwitterObject() {
  return new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
  });
}

function getMedia(tweet) {
  if (!tweet.extended_entities || !tweet.extended_entities.media) {
    return null;
  }

  return tweet.extended_entities.media.map((media) => {
    return [media.media_url, media.media_url_https]
  });
}

function filterTweetsData(tweet) {
  return {
    id: tweet.id,
    date: moment(new Date(tweet.created_at)).format('LLL'),
    content: tweet.text,
    media: getMedia(tweet)
  }
}

function getTweets(user) {
  return new Promise((resolve, reject) => {
    const twitter = getTwitterObject();
    const resource = 'statuses/user_timeline.json';
    const params = {
      screen_name: user,
      count: 25
    };
    twitter.get(resource, params, (error, tweets, response) => {
      if (error) {
        return reject(error);
      }

      resolve(tweets.map(filterTweetsData));
    });
  });
}

exports.getTweets = getTweets;
