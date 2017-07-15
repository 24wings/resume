import egg = require('egg');

module.exports = (app: egg.Application) => {
    app.get('/', 'home.index');

};