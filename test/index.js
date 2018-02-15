const JASMINE = require('jasmine');
const SpectacleReporter = require('spectacle-reporter'); //eslint-disable-line

const runner = new JASMINE();

/* create Jasmine config */
runner.loadConfig({
  random: false,
  spec_files: [
    './test/**/*.spec.js',
  ],
});

/* add SpectacleReporter */
runner.addReporter(new SpectacleReporter());

/* execute tests */
runner.execute();
