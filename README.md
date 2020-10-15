# egg-bull

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@hackycy/egg-bull.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@hackycy/egg-bull
[download-image]: https://img.shields.io/npm/dm/@hackycy/egg-bull.svg?style=flat-square
[download-url]: https://npmjs.org/package/@hackycy/egg-bull

[bull](https://github.com/OptimalBits/bull) plugin for Egg.js.

## 安装

```bash
$ npm install -S @hackycy/egg-bull bull
$ npm install --save-dev @types/bull
```

## 使用

### 插件启用

``` ts
// {app_root}/config/plugin.ts
const plugin: EggPlugin = {
  bull: {
    enable: true,
    package: '@hackycy/egg-bull',
  },
}
```

### 定义Queue

在app目录新建queue目录，再进行编写Queue

``` ts
// app/queue/task.ts
import * as Queue from 'bull';
import { Application } from 'egg';

export default (app: Application) => {
  app.logger.info('queue');
  const q = new Queue('testqueue', {
    redis: {
      port: 6379,
      host: '127.0.0.1',
      password: '123456',
      db: 0,
    },
  });
  q.process(function(job, done) {
    app.logger.info('[queue]', job.data);
    done();
  });
  return q;
};
```

> 建议export导出为一个funtion，这样会注入一个Egg的Application实例。类定义则无法获取。
>
> 该插件辅助定义了`egg-ts-helper`，可以再TS项目中方便使用。

### 获取Queue

已经将所有定义的Queue挂载到了Application上，例如获取上述定义的

``` typescript
this.app.queue.task.add({ b: 'a' }); //具体使用与bull无差异
```

## 有问题或Bug

请提出[issues](https://github.com/hackycy/egg-bull/issues)

## License

[MIT](LICENSE)
