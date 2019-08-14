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

//查找一个订单号
router.get('/id', function (req, res, next) {
    // console.log("get请求的方式", req.query.param);
    const str = JSON.stringify(req.query);
    const param = JSON.parse(str);
    console.log(typeof (param));
    
    res.header('Access-Control-Allow-Origin', '*');

    select('order', param, data => {
        
        res.send(data);
        
    });
});

//限制条件查询 限定 数量的数据
router.get('/', function (req, res, next) {
    // console.log("get请求的方式", req.query.param);
    const str = JSON.stringify(req.query);
    const param = JSON.parse(str);
    const index = param.index - 0;
    const conust = param.conust - 0;
    console.log(index, conust);

    res.header('Access-Control-Allow-Origin', '*');

    select('order', undefined, data => {

        //总条数
        const strip = data.length;
        //总页数
        const totalPage = Math.ceil(strip / conust);
        //截取的起始下标
        var start = (index - 1) * conust;
        //截取的终点下标，不是截取的数量
        var end = (index - 1) * conust + conust;
        //截取的conust数量大小的数据
        const limitData = data.slice(start, end);

        const msg = {
            limitData,
            index,
            conust,
            strip,
            totalPage
        };

        res.send(msg);

    });

});

module.exports = router;
