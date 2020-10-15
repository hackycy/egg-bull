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

> 插件内并无直接依赖bull，需要自己安装

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

在`app`目录新建`queue`目录，所有的`Queue`都要在该文件夹下定义，注意返回的类型一定要为bull实例，否则使用该插件无意义。这里只是约定。

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

> 可以以文件夹分隔。
>
> 建议export导出为一个funtion，这样会注入一个Egg的Application实例。
>
> 如无需使用Application实例的可以直接导出定义的bull实例。
>
> 该插件辅助定义了`egg-ts-helper`，可以在TS项目中方便使用。

### 获取Queue

已经将所有定义的Queue挂载到了Application上，例如获取上述定义的

``` typescript
this.app.queue.task.add({ b: 'a' }); //具体使用与bull无差异
```

## 有问题或Bug

请提出[issues](https://github.com/hackycy/egg-bull/issues)

## License

[MIT](LICENSE)
