const Level = require('./Level');

class Logger {

  constructor(loggerName, logLevel) {
    this.loggerName = loggerName;

    /* default logging level to TRACE if none provided */
    this.logLevel = logLevel || Level.TRACE;
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

    const { color } = Level[level];

    console.log(`${timestamp} - [${color}${this.loggerName}\x1b[0m][${level}]:${msg}`);
  }

  trace(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.TRACE.value) {
      return;
    }

    this.logMessage(Level.TRACE.name, args);
  }

  debug(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.DEBUG.value) {
      return;
    }

    this.logMessage(Level.DEBUG.name, args);
  }

  info(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.INFO.value) {
      return;
    }

    this.logMessage(Level.INFO.name, args);
  }

  warn(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.WARN.value) {
      return;
    }

    this.logMessage(Level.WARN.name, args);
  }

  error(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.ERROR.value) {
      return;
    }

    this.logMessage(Level.ERROR.name, args);
  }
}

module.exports = Logger;
