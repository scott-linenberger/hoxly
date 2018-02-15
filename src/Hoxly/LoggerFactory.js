const Logger = require('./Logger');

class LoggerFactory {
  constructor(loggingConfig) {
    this.loggingConfig = loggingConfig;
  }

  getLogger(loggerName, level) {
    /* if a level param is set, override the logging level in logging config */
    if (level !== undefined) {
      return new Logger(loggerName, level);
    }

    /* return a logger config'd with a logging level if config is set */
    if (this.loggingConfig !== undefined) {
      return new Logger(loggerName, this.loggingConfig.level);
    }

    /* return a logger w/o config if none set */
    return new Logger(loggerName);
  }
}

module.exports = LoggerFactory;
