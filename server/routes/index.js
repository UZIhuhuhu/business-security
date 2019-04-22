const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const models = require('../models');

const bodyParser = bodyparser({
  enableTypes: ['json', 'form', 'text']
});

router.get('/history', async ctx => {
  const history = await models.History.findAll();
  ctx.body = {
    history
  };
});

router.get('/history:id', async ctx => {
  const detail = await models.History.findOne({
    where: { id: ctx.params.id }
  });
  ctx.body = {
    detail
  };
});

router.post('/create', bodyParser, async ctx => {
  const {
    text,
    dataModel,
    programmingCode,
    loss,
    author,
    level
  } = ctx.request.body;
  const check = await models.History.create({
    text,
    dataModel,
    programmingCode,
    loss,
    author,
    level
  });
  ctx.body = {
    check
  };
});

module.exports = router;
