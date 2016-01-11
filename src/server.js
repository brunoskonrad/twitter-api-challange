const express = require('express');

const twitter = require('./server/twitter');
const app = express();

app.use(express.static('public'));

app.get('/tweets/:twitterName', (req, res) => {
  twitter.getTweets(req.params.twitterName)
    .then((tweets) => {
      console.log(tweets);
      res.json(tweets);
    }, (error) => {
      res.json(tweets);
    });
});

const server = app.listen(3000, () => {
  console.log('started');
});
