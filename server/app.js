const bodyPaser = require('koa-bodyparser');
const logger = require('koa-logger');
const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const session = require('koa-session');
const views = require('koa-views');

const config = require('../config');
const routers = require('./routers/index');

const app = new Koa();

app.use(logger());

app.keys = ['auth', 'system', 'dongrenguang'];
app.use(session({
    key: 'koa:sess:auth-system'
}, app));
app.use(koaStatic(path.join(__dirname, '../static')));
app.use(bodyPaser());
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));
app.use(routers.routes()).use(routers.allowedMethods());

const port = config.port;
app.listen(port, () => {
    console.log(`Server is running at ${port} port...`);
});
