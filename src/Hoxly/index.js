const LoggerFactory = require('./LoggerFactory');

/* declare a new default singleton LoggerFactory */
const loggerFactory = new LoggerFactory();

module.exports = {
  LoggerFactory: loggerFactory,
};
