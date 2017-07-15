import egg = require('egg');

module.exports = (app: egg.Application) => {
  class HomeController extends egg.Controller {
    async index() {
      this.ctx.body = 'hi, egg';
    }
  }
  return HomeController;
};
