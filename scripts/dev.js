#!/user/bin/env node

/**
 * @param {string} command process to run
 * @param {string[]} args command line arguments
 * @returns {Promise<void>} promise
 */

import chalk from 'chalk'
import packages from '../packages/web/package.json' assert { type: 'json' };
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(packages.scripts)
