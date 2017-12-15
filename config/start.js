
const config = require('./webpack');
const chalk = require('chalk');
const webpack = require('webpack');
const fs = require('fs-extra');
const path = require('path');
const header = require('./res/header');

/*
 *
 * Clean up the dist directory
 *
 */
fs.emptyDirSync(path.resolve(__dirname, '../dist'));

header('Setting things up for a challenge...');

try {
  compiler = webpack(config);
} catch (err) {
  console.log(chalk.red('Failed to compile.'));
  console.log();
  console.log(err.message || err);
  console.log();
  process.exit(1);
}

const watchOptions = {
  aggregateTimeout: 300,
  poll: 1000
};

compiler.watch(watchOptions, (err, stats) => {

  if (err || stats.hasErrors()) {
    console.log();
    console.log(chalk.red('Oh crap!'));
    console.log();
  } else {
    console.log();
    console.log(chalk.green('Everything hunky dory!'));
    console.log();
  }

  console.log(stats.toString({
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }));
});