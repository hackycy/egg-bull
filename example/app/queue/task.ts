import * as Queue from 'bull';
import { Application } from 'egg';

/**
 * 自定义任务队列
 */
export default (app: Application) => {
  // const ctx = app.createAnonymousContext();
  const tq = new Queue('test', {
    redis: {
      port: 6379,
      host: '127.0.0.1',
      password: '123456',
      db: 0,
    },
  });

  // 处理任务
  tq.process(async function(job) {
    app.logger.error(job.data);
  });
  return tq;
};
