const LoggerFactory = require('./LoggerFactory');
const Level = require('./Level');

/* declare a new default singleton LoggerFactory */
const loggerFactory = new LoggerFactory();

module.exports = {
  LoggerFactory: loggerFactory,
  Level,
};
