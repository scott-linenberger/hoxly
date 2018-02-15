const LoggerFactory = require('../src/Hoxly/LoggerFactory');
const LEVEL = require('../src/Hoxly/Level');

describe('LoggerFactory Suite: ', () => {
  const config = {
    level: LEVEL.TRACE,
  };

  const testFactory = new LoggerFactory(config);

  it('should be defined', () => {
    expect(testFactory).toBeDefined();
  });

  describe('LoggerFactory Constructor', () => {
    it('should be defined', () => {
      expect(testFactory).toBeDefined();
    });

    it('should have set the config from constructor param', () => {
      expect(testFactory.loggingConfig).toBeDefined();
    });

    it('should use the config logging level', () => {
      expect(testFactory.loggingConfig.level).toEqual(config.level);
    });
  });

});
