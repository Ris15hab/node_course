//const chalk = require('chalk');
//const validator = require('validator');

import chalk from 'chalk';
import validator from 'validator';

const a = validator.isEmail("rishabgmail.com");
console.log(a ? chalk.green.inverse(a) : chalk.red.inverse(a));
