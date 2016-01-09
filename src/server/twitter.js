var Twitter = require('twitter');

function getTwitterObject() {
  return new Twitter({
    consumer_key: '9b3UWwgkpJf2yZwDwilRldNWX',
    consumer_secret: 'C6UAFrwLB9cMHO2vBmD4zt1ix7zcQQdXHMTjAtkJHOF60hyVK1',
    access_token_key: '139545957-AJ06ErUQW33JmT82CLLS12jdfHcKA9oiueklDsr7',
    access_token_secret: 'WFmFYaH8vymtoBOgPkiMDxYqbAwVZpqlH6oXh64vTu5Yt',
  });
}

function filterTweetsData(tweet) {
  return {
    date: tweet.created_at,
    content: tweet.text,
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
        reject(error);
      }

      resolve (tweets.map(filterTweetsData));
    });
  });
}

exports.getTweets = getTweets;
