var Twitter = require('twitter');
var moment = require('moment');

function getTwitterObject() {
  return new Twitter({
    consumer_key: '9b3UWwgkpJf2yZwDwilRldNWX',
    consumer_secret: 'C6UAFrwLB9cMHO2vBmD4zt1ix7zcQQdXHMTjAtkJHOF60hyVK1',
    access_token_key: '139545957-AJ06ErUQW33JmT82CLLS12jdfHcKA9oiueklDsr7',
    access_token_secret: 'WFmFYaH8vymtoBOgPkiMDxYqbAwVZpqlH6oXh64vTu5Yt',
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
