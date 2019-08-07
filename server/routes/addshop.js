var express = require('express');
var router = express.Router();
var {
    insert
} = require('./db');
/* GET users listing. */
router.get('/', async function (req, res, next) {
    const form = req.query;
    console.log(form);
    res.header('Access-Control-Allow-Origin', '*');
    let data = await insert('findlist', {
        'url': "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/5a9d248cN071f4959.jpg",
        'mingchen2': '品牌' + form.brand,
        'mingchen1': form.title,
        'price': "价格：￥649",
        'huohao': "货号：7437789",
        'putaway': true,
        "new_prodce": true,
        "recommend": true,
        'sort': 0,
        'sales': 0,
        'check': "未审核"
    })
    res.json(data);
});

module.exports = router;