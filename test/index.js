const JASMINE = require('jasmine');
const SpectacleReporter = require('spectacle-reporter'); //eslint-disable-line

const runner = new JASMINE();

runner.loadConfig({
  random: false,
  spec_files: [
    './test/**/*.spec.js',
  ],
});

console.log(`current directory: ${process.cwd()}`);

runner.addReporter(new SpectacleReporter());

runner.execute();
