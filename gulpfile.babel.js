'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import webpack from 'webpack';
import webpackConfig from './webpack.config.client';

const blob = {
  sass: {
    entry: './scss/main.scss',
    all: './scss/**/*.scss',
  },
  client: [
    './src/**/*.js',
    './src/**/*.jsx',
    '!./src/server.js',
    '!./src/server/**/*.js',
  ],
  dest: {
    style: './public/css',
  }
};

gulp.task('build:scss', () => {
  return gulp.src(blob.sass.entry)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(blob.dest.style));
});

gulp.task('build:client', () => {
  webpack(webpackConfig, (err, status) => {
    if (err) {
      console.log(err);
    }
  });
});

gulp.task('watch', ['build'], () => {
  gulp.watch(blob.sass.all, ['build:scss']);
  gulp.watch(blob.client, ['build:client']);
})

gulp.task('build', ['build:scss', 'build:client']);

gulp.task('default', ['watch']);
