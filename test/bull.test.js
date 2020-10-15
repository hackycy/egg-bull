'use strict';

const mock = require('egg-mock');

describe('test/bull.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/bull-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, bull')
      .expect(200);
  });
});
