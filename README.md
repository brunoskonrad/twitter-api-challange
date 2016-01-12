# Twitter Challenge

## Setup

You need to have installed:
1. Node (you can use [nvm](https://github.com/creationix/nvm));
1. NPM (also installed via nvm);

So after cloning the repository, you must install the dependencies listed on `package.json`, run on your terminal:
```bash
npm install
```

After this open two terminal's instances. Run the server in one of them, type:
```bash
npm run serve
```

And in another instance run the *gulp* task to watch the source code files and build them:
```bash
npm run dev
```

Now you can start coding. See more about the project structure in the section below.

## App design & Choices

The app is written in Javascript ES2015, compiled with [Babel](https://babeljs.io/), and uses the [React](https://facebook.github.io/react/) library for UI rendering.

**React**: created by Facebook, react permits you to write UI components and compose with other components to create your layout. I choose this because you only need to change the state (the app's data) at some point and the React re-render the changes.

**Babel**: a compile tool from ES2015/ES2016 code to ES5.

I picked up [SASS](http://sass-lang.com/) as a CSS preprocessor. Because I feel more comfortable with and also it's good for the purpose of the app. The *flavor* is SCSS.

I used Node.js because only needs to serve a `/public` folder with the JS app and get some tweets via API. Because of this I choose [express](http://expressjs.com/) as a *web framework* and the [twitter NPM module](https://www.npmjs.com/package/twitter).

On my express app I expose two endpoints:
1. the root `/`, which render the React web app;
1. and the `/tweets/:screnName`, which is a `GET` HTTP request with the twitter's screen name, e.g: brunoskonrad.

To help me in my development experience I used [Gulp](http://gulpjs.com/) to watch the changes on my SASS or JSX files and build they again.

For testing purposes I choose [Karma](http://karma-runner.github.io/0.13/index.html) as my test runner and [Jasmine](http://jasmine.github.io/) as my test library.

And finally, to pack it all, I use the [webpack](https://webpack.github.io/) because it is flexible and permit to me custom configurations.

## Deploy

You must [setup the Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) on your project folder and then *send a push* like git, e.g:

```bash
git push heroku master
```

## Tests

To run the tests type in your terminal:

```bash
npm test
```
