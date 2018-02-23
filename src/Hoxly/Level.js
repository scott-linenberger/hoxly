const Color = require('./Color');

const LEVEL = {
  TRACE: {
    value: 5,
    name: 'TRACE',
    color: Color.textWhite,
  },
  DEBUG: {
    value: 4,
    name: 'DEBUG',
    color: Color.textMagenta,
  },
  INFO: {
    value: 3,
    name: 'INFO',
    color: Color.textCyan,
  },
  WARN: {
    value: 2,
    name: 'WARN',
    color: Color.textYellow,
  },
  ERROR: {
    value: 1,
    name: 'ERROR',
    color: Color.textRed,
  },
  OFF: {
    value: 0,
    name: 'OFF',
  },
};

module.exports = LEVEL;
