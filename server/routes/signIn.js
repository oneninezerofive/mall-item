var express = require('express');
var router = express.Router();

router.post('/', async (req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods:POST, GET, OPTIONS');
    let str = JSON.stringify(req.body);
    // console.log('p+n', pw, name);
    
    console.log('str' + str);
    const {
        insert
    } = require('./inquireMongoDB')

    insert('uerInformations', [JSON.parse(str)], data => {
        
        // console.log(data.result);
        if (data.result.ok == 1 && data.result.n == 1) {
            //插入成功
            res.send('yes');
        }else{
            res.send('no');
        }

    })

});

module.exports = router;