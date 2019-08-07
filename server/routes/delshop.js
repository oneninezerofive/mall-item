var express = require('express');
var router = express.Router();
var {
    del,
    ObjectId
} = require('./db');
/* GET users listing. */
router.get('/', async function (req, res, next) {
    const id = req.query;
    const _id = ObjectId(id._id);
    res.header('Access-Control-Allow-Origin', '*');
    let data = await del('findlist', {_id})
    res.json(data);
});

module.exports = router;