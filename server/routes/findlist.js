var express = require('express');
var router = express.Router();
var {
  find,
} = require('./db');
/* GET users listing. */
router.get('/', async function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  let data = await find('findlist', {});

  res.json(data);
});

module.exports = router;