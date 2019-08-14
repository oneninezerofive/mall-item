var express = require('express');
var router = express.Router();
var {
  find,
} = require('./db');
router.get('/', async function (req, res, next) {
  let info = req.query
  res.header('Access-Control-Allow-Origin', '*');
  let data = await find('userInformation', {
   "username":info.user,
   'password':info.passwd
  });
  res.json(data);
});

module.exports = router;