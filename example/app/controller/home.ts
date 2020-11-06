import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    this.app.queue.task.add({ id: 1 });
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
