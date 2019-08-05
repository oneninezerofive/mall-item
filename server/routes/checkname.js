var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
   const condition = req.query;
   console.log(condition);
   const {
      select
   } = require('./inquireMongoDB');

   select('uerInformations', condition, data => {
      
      res.append('Access-Control-Allow-Origin', '*');
      console.log(data);
      if (Boolean(data.join(''))) {
         //查得到数据库有这个名字，就不能注册。
         res.send('no');
      } else {
         //name是undefined，数据库，没有这个没有这个名字，可以注册!
         res.send('yes');
      }

   });


});

module.exports = router;