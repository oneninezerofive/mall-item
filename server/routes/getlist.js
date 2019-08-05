var express = require('express');
const {
    ObjectID,
    select,
    del,
    updata,
    insert
} = require('./inquireMongoDB');

var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    select('order',{}, data =>{
        res.send(data);
    });

});
//查找一个订单号
router.get('/id', function (req, res, next) {
    // console.log("get请求的方式", req.query.id);
    const str = JSON.stringify(req.query);
    const id = JSON.parse(str);
    console.log(typeof(id));
    
    res.header('Access-Control-Allow-Origin', '*');

    select('order', id, data => {

        res.send(data);
        
    });
});

//限制条件查询 限定 数量的数据
router.get('/limit', function (req, res, next) {
    // console.log("get请求的方式", req.query.id);
    const str = JSON.stringify(req.query);
    const id = JSON.parse(str);
    // console.log(typeof (id));

    res.header('Access-Control-Allow-Origin', '*');

    select('order', id, data => {

        res.send(data);

    });
});


module.exports = router;