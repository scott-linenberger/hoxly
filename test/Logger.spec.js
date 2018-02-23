const Logger = require('../src/Hoxly/Logger');
const Level = require('../src/Hoxly/Level');
// const Color = require('../src/Hoxly/Color');

/* constructor tests */
describe('Logger: ', () => {
  const loggerName = 'LoggerSpec';
  let logger;

  /* init the logger */
  beforeAll((done) => {
    logger = new Logger('LoggerSpec');
    done();
  });

  /* constructor tests */
  describe('constructor', () => {
    it('should construct a new logger', () => {
      expect(logger).toBeDefined();
    });

    it('should set the logger name', () => {
      expect(logger.loggerName).toEqual(loggerName);
    });

    it('should have a log level of: TRACE', () => {
      const { logLevel } = logger;
      expect(logLevel.value).toEqual(Level.TRACE.value);
    });
  });

  /* method tests */
  describe('methods', () => {
    it('should have a trace method', () => {
      expect(logger.trace).toBeDefined();
    });

    it('should have a debug method', () => {
      expect(logger.debug).toBeDefined();
    });

    it('should have an info method', () => {
      expect(logger.info).toBeDefined();
    });

    it('should have a warn method', () => {
      expect(logger.warn).toBeDefined();
    });

    it('should have an error method', () => {
      expect(logger.error).toBeDefined();
    });
  });

  

});
