'use strict';

const path = require('path');

// decalre bull queue dir in app/queue
const baseDir = 'queue';

/**
 * bull init
 * @param {Application} app Application
 */
function bull(app) {
  app.logger.info('[bull]', 'bull queue load start');
  const directory = path.join(app.config.baseDir, 'app', baseDir);
  app.loader.loadToApp(directory, 'queue', {
    inject: app,
  });
  app.logger.info('[bull]', 'bull queue load end');
}

module.exports = bull;
