/**
 * @module Level
 */

/**
  * @typedef {Object} Level
  */
const LEVEL = {
  TRACE: {
    value: 5,
    name: 'TRACE',
    color: '\x1b[29m',
  },
  DEBUG: {
    value: 4,
    name: 'DEBUG',
    color: '\x1b[35m',
  },
  INFO: {
    value: 3,
    name: 'INFO',
    color: '\x1b[36m',
  },
  WARN: {
    value: 2,
    name: 'WARN',
    color: '\x1b[33m',
  },
  ERROR: {
    value: 1,
    name: 'ERROR',
    color: '\x1b[31m',
  },
  OFF: {
    value: 0,
    name: 'OFF',
  },
};

module.exports = LEVEL;
