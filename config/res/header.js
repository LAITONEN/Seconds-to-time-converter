
const quotes = require('./quotes');
const quote = quotes[Math.floor(Math.random() * quotes.length)];
const optimist = require('optimist');
const wrap = require('word-wrap');
const chalk = require('chalk');

module.exports = (message) => {

  const header = optimist
    .default({
      header: true
    })
    .argv
    .header

  if (header) {
    console.log();
    console.log('                                         ++                                    ');
    console.log('                                        +##+                                   ');
    console.log('                                                                               ');
    console.log('      ;###### +##    `#####.  `####+    ###   ### ;#####        +######:       ');
    console.log('    +############   #################:  ###   ###########`    ###########+     ');
    console.log('   ####      ####  ,###    ####    ###  ###   ####     ###`  ###;      ####    ');
    console.log('  ,###        ###  +##;    +##,    ###  ###   ###      `##+ ###;        ###,   ');
    console.log('  ###;        `##  ;##;    `##.    ###  ###   ###       ### ###         `###   ');
    console.log('  ,###        ###  ;##;    `##.    ###  ###   ###       ### ###;        ###,   ');
    console.log('   ####      .###  ;##;    `##.    ###  ###   ###       ###  ###`      ####    ');
    console.log('    ########   +#  ;##;    `##.    ###  ###   ###       ###   ###########+     ');
    console.log('      `#####`      ;##;    `##.    ###  ###   ###       ###     +######:       ');
    console.log();
    console.log(wrap(quote.text + ' -' + quote.author, { width: 80 }));
    console.log();
    console.log(chalk.yellow(wrap(message, { width: 80 })));
    console.log();
  }
};