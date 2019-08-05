var express = require('express');
const {
    ObjectID,
    select,
    del,
    updata,
    insert,
    limitSelect
} = require('./inquireMongoDB');

var router = express.Router();


router.get('/', function (req, res, next) {
    // console.log("get请求的方式", req.query.id);

    const str = JSON.stringify(req.query);
    const id = JSON.parse(str);
    // console.log('未更新前id的值', id);
    const key = id._id;
    const condition = ObjectID(key);
    // console.log('condition', {_id : condition});
    delete id._id;
    id.orderStatus = '已发货'
    // console.log('删除ID后', id);
    res.header('Access-Control-Allow-Origin', '*');

    updata('order', {
        _id: condition
    }, id, data => {
        if (data.result.ok == 1 && data.result.n == 1) {
            //插入成功
            res.send('yes');
        } else {
            res.send('no');
        }
    });
});

module.exports = router;