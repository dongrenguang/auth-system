const router = require('koa-router')();

module.exports = router
    .get('/', async ctx => {
        let n = ctx.session.views || 0;
        ctx.session.views = ++n;
        await ctx.render('auth');
    })
    .post('/', async ctx => {
        ctx.body = {
            views: ctx.session.views
        };
    });
