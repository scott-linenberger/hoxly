const LOG_LEVEL = require('./Level');

class Logger {

  constructor(loggerName, logLevel) {
    this.loggerName = loggerName;

    /* default logging level to TRACE if none provided */
    this.logLevel = logLevel || LOG_LEVEL.TRACE;
  }

  getTimestamp() {
    const now = new Date(Date.now());
    return now.toLocaleString();
  }

  logMessage(level, ...args) {
    let msg = '';
    const timestamp = this.getTimestamp();

    args.forEach((currentArg) => {
      msg += ` ${currentArg}`;
    });

    console.log(`${timestamp} - [${level.color}${this.loggerName}${level.color}][${level}]:${msg}`);
  }

  trace(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < LOG_LEVEL.TRACE.value) {
      return;
    }

    this.logMessage(LOG_LEVEL.TRACE.name, args);
  }

  debug(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < LOG_LEVEL.DEBUG.value) {
      return;
    }

    this.logMessage(LOG_LEVEL.DEBUG.name, args);
  }

  info(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < LOG_LEVEL.INFO.value) {
      return;
    }

    this.logMessage(LOG_LEVEL.INFO.name, args);
  }

  warn(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < LOG_LEVEL.WARN.value) {
      return;
    }

    this.logMessage(LOG_LEVEL.WARN.name, args);
  }

  error(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < LOG_LEVEL.ERROR.value) {
      return;
    }

    this.logMessage(LOG_LEVEL.ERROR.name, args);
  }
}

module.exports = Logger;
