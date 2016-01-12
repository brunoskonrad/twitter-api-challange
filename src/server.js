const express = require('express');

const twitter = require('./server/twitter');
const app = express();

app.use(express.static('public'));

app.get('/tweets/:twitterName', (req, res) => {
  twitter.getTweets(req.params.twitterName)
    .then((tweets) => {
      res.json(tweets);
    }, (error) => {
      res.status(400).json(error);
    });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('started');
});
