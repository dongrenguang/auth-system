const bodyPaser = require('koa-bodyparser');
const logger = require('koa-logger');
const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const views = require('koa-views');

const app = new Koa();
const routers = require('./routers/index');

app.use(logger());
app.use(bodyPaser());
app.use(koaStatic(path.join(__dirname, '../static')));
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));
app.use(routers.routes()).use(routers.allowedMethods());

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running at ${port} port...`);
});
