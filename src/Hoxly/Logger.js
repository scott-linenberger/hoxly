const Level = require('./Level');
const Color = require('./Color');

class Logger {

  constructor(loggerName) {
    this.loggerName = loggerName;

    /* default logging level to TRACE */
    this.logLevel = Level.TRACE;
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

    /* if a highlight is defined, use that for coloring */
    if (this.highlight !== undefined) {
      console.log(`${this.highlight}${timestamp} - [${this.loggerName}][${level}]:${msg}${Color.reset}`); //eslint-disable-line
    } else {
      console.log(`${timestamp} - [${this.loggerName}][${color}${level}${Color.reset}]:${msg}${Color.reset}`); //eslint-disable-line
    }
  }

  trace(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.TRACE.value) {
      return this;
    }

    this.logMessage(Level.TRACE.name, args);
    return this;
  }

  debug(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.DEBUG.value) {
      return this;
    }

    this.logMessage(Level.DEBUG.name, args);
    return this;
  }

  info(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.INFO.value) {
      return this;
    }

    this.logMessage(Level.INFO.name, args);
    return this;
  }

  warn(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.WARN.value) {
      return this;
    }

    this.logMessage(Level.WARN.name, args);
    return this;
  }

  error(...args) {
    /* return if logging level too low */
    if (this.logLevel.value < Level.ERROR.value) {
      return this;
    }

    this.logMessage(Level.ERROR.name, args);
    return this;
  }

  setLogLevel(logLevel) {
    this.logLevel = logLevel;
    return this;
  }

  highlight(highlight) {
    this.highlight = highlight;
    return this;
  }
}

module.exports = Logger;
