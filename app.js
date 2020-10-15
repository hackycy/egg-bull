'use strict';

const bull = require('./lib/bull');

class AppBootHook {

  constructor(app) {
    this.app = app;
  }

  /**
   * 所有的配置已经加载完毕
   * 可以用来加载应用自定义的文件，启动自定义的服务
   */
  async didLoad() {
    bull(this.app);
  }

}

module.exports = AppBootHook;
