const router = require('koa-router')();

const auth = require('./auth');

router.use('/', auth.routes(), auth.allowedMethods());

module.exports = router;
