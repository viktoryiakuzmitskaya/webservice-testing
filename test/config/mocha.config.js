const argv = require('yargs').argv;

module.exports = {
    reporter: 'mochawesome',
    spec: 'test/specs/*spec.js',
    timeout: 10000,
    parallel: argv.instances > 1,
    jobs: argv.instances || 1
};