const router = require('koa-router')();

const auth = require('./auth');

router.use('/', auth.routes());

module.exports = router;
