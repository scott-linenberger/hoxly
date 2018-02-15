const Logger = require('../src/Hoxly/Logger');
const Level = require('../src/Hoxly/Level');

/* constructor tests */
describe('Logger Suite: constructor(no args)', () => {
  let logger;

  /* init the logger */
  beforeAll((done) => {
    logger = new Logger();
    done();
  });

  /* execute tests */
  it('should construct a new logger', () => {
    expect(logger).toBeDefined();
  });

  it('should have a log level of: TRACE', () => {
    const { logLevel } = logger;
    expect(logLevel.value).toEqual(Level.TRACE.value);
  });

});
