/* 
name : 覃淇韩；
tel ： 
gieHub : uncle-han

*/

/*
数据接口：
天气预报接口：http://wthrcdn.etouch.cn/weather_mini
ajax参数说明：type : get, data : '&city=' + 城市名； 

*/



//--------PHP调用的方法时候，常用的默认参数--------//
/* 
CURRENT_TIMESTAMP  数据库，获取当前系统的时间戳；
$content = $res->fetch_all(MYSQLI_ASSOC);//对象  [{},{},{}]
echo json_encode($content,JSON_UNESCAPED_UNICODE);//防止中文转义
header('Content-type:text/html;charset=utf-8')  设置头信息，防止中文乱码



*/
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------





//--------获取ID名--------//
function getId(IdName) {
    var name = document.getElementById(IdName);
    return name;
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//-----获取标签TagName名--------//
function getTagName(object, tagName) {
    return object.getElementsByTagName(tagName);
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//-----获取标签className名--------//
function getClassName(object, className) {
    return object.getElementsByClassName(className);
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----min到max之间的随机数--------------//
function ninToMax(min, max) {
    return parseInt(Math.random() * (max - min)) + min;
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//---------字符串去重---norepeatString-----------//
function noRepeatString(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i++)
        if (newStr.indexOf(str[i]) == -1) {
            newStr += str[i];
        }
    return newStr;
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----数组去重---noRepeatArray-----------//
function noRepeatArray(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++)
        if (newArray.indexOf(array[i]) == -1) {
            newArray.push(array[i]);
        }
    return newArray
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----去除数组中的空值,null,nudefined--------------//

function delEmptyVal(array) {
    return array.filter(function (item) {
        return item && item.trim();
    });
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//----查找某一个字符在字符串里出现的个数,并返回一个对象-----------//
function searchStr(string) {
    var str = noRepeatString(string); //字符串去重
    var json = {};
    for (var i = 0; i < str.length; i++) {
        var arr = []; //声明一个空数组，用于存match查询正则之后的;
        var reg = new RegExp(str[i], 'g'); //声明一个正则表达式，用于match正则查询；
        arr = string.match(reg);
        json[str[i]] = arr.length; //正则表达式之后的，
    }
    return json;
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----objToUrl-----------//


function objToUrl(obj) {
    var str = '';
    for (var key in obj) {

        if (Array.isArray(obj[key])) {
            str += key + '=' + obj[key].join() + '&';
        } else {
            str += key + '=' + obj[key] + '&';
        }
    }
    return str.slice(0, -1);
}


//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----链接url转对象--urlToObject---------//
function urlToObject(url) { //ps：要生成的对象不包含数组，可以使用该方法
    url = decodeURI(url); //解码url，把被转码的中文，解码成认识的汉字；
    var newurl = url.slice(url.indexOf('?') + 1) //从问号？后面开始截取，直到后面，放回一字符串
    // var arr1 = newurl.split('*');
    var arr = newurl.split('&'); //以&字符进行切割生成一个新数组，[cha1=cha2, cha3=cha4,...]
    var json = {};
    arr.forEach(function (item) { //遍历&切割后的数组，数组的每一项用‘=’切割
        var arr1 = item.split('=');
        json[arr1[0]] = arr1[1]; //用=切割后的数组，数组的第一项作为键名，数组的第二项作为键值
    });
    return json;
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----css方法设置和获取样式--------//
//封装一个函数：能够获取元素的样式(行内和非行内)，还能设置元素的样式（行内）
function css() {
    var ele = arguments[0];
    var attr = arguments[1];
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(ele, false)) {
            //证明在主流浏览器下：IE9+ 和 主流的浏览器
            return getComputedStyle(ele, false)[attr];
        } else {
            //低版本IE:IE678
            return ele.currentStyle(attr);
        }
    } else if (arguments.length == 3) {
        //设置样式
        // box.style.display = 'block';
        var val = arguments[2];
        ele.style[attr] = val;
    }

}




//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----对个位数补0---------//
//补0 如 1 => 01
function toDouble(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}
//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------将毫秒数转成年-月-日-时-分-秒--------//
function secChang(num) { //接收一个秒数，转成：xx天xx时xx分xx秒
    // var sec = num % 60; //秒数
    // var min = parseInt(num / 60) % 60; //分
    // var hour = parseInt(num / 60 / 60) % 24; //小时
    // var day = parseInt(num / 60 / 60 / 24); //天数
    // var month = parseInt(num / 60 / 60 / 24 / 30); //月数
    // var year = parseInt(num / 60 / 60 / 24 / 30 / 12); //年数
    // return {
    //     year: year,
    //     month: month,
    //     day: day,
    //     hour: hour,
    //     min: min,
    //     sec: sec
    // }
    var time = new Date(num);
    // return time.valueOf();
    return {
        year: time.getFullYear(),
        month: time.getMonth() + 1,
        data: time.getDate(),
        hour: time.getHours(),
        min: time.getMinutes(),
        sec: time.getSeconds()
    };
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----获取当前系统时间---------//

function getTime() {
    var time = new Date(); //获取时间戳
    // console.log(time);
    var year = time.getFullYear(); //获取年
    var month = time.getMonth() + 1; //获取月
    var date = time.getDate(); //获取日
    var hour = time.getHours(); //获取时
    var minu = time.getMinutes(); //获取分
    var sec = time.getSeconds(); //获取秒
    var week = time.getDay(); //获取星期几
    // console.log(year, month, date, hour, minu, sec, week);

    var w = '天一二三四五六';
    w = w.charAt(week);

    return {
        year: toDouble(year),
        month: toDouble(month),
        date: toDouble(date),
        hour: toDouble(hour),
        minu: toDouble(minu),
        sec: toDouble(sec),
        week: w
    };
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//----生成16进制的随机色---------//

function randomColor16() {
    var html = '0123456789abcdef';
    var colorValue = '';
    for (var i = 0; i < 6; i++) {
        var randomNum = parseInt(Math.random() * html.length);
        colorValue += html[randomNum];
    }
    return '#' + colorValue;
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------

//----随机验证码-4位字母和数字---------//

//四位数随机验证码：带字母(大小写)和数字组合
function randomNum() {
    var html = '0987654321zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';
    var code = ''; //存拼接字符串
    for (var i = 0; i < 4; i++) {
        var ran = parseInt(Math.random() * html.length);
        code += html[ran];
    }
    return code;
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//----随机4位数字验证码---------//

//生成四位数随机验证码 ：4位随机数 0-9之间的数字，取4个拼接
function randomNumber() {
    var html = ''; //存拼接的验证码
    for (var i = 0; i < 4; i++) {
        html += parseInt(Math.random() * 10); //0-9
    }
    return html;
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------

//----正则---------//

function CheckReg() {
    this.name = 'checkReg';
}

CheckReg.prototype = {
    trim: function (str) { //去掉前后空格
        var reg = /^\s+|\s+$/g;
        return str.replace(reg, '');
    },
    tel: function (str) { //号码
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    tel_yzm: function (str) {
        var reg = /\d{6}/;
        return reg.test(str);
    },
    email: function (str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
        var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
        return reg.test(str);
    },
    idcard: function (str) { //身份证
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    psweasy: function (str) { //6-18位首字母开头
        var reg = /^[a-zA-Z]\w{5,17}$/;
        return reg.test(str);
    },
    pwwagain: function (str1, str2) { //确认密码
        return str1 === str2; //全等 恒等
    },
    urladr: function (str) { //路径：网址规则
        var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
        return reg.test(str);
    },
    name: function (str) { //账号字母开头,6-20位
        var reg = /^[a-zA-Z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    chinese: function (str) { //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    birthday: function (str) { //生日
        var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
        return reg.test(str);
    }
};

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------

//----深度拷贝---------//

function deepClone(obj) {
    var str = JSON.stringify(obj);
    return JSON.parse(str);
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//----运动框架-------------------//

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的
            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            // if (fnend) { //可选参数的由来
            //     fnend();
            // }
            !fnend || fnend();
        }

    }, 40); //obj.timer 每个对象都有自己定时器

}



//-----ajax方法--------//
/*
    参数设置：
        1、type: 请求方式；
        2、url: 路径;
        3、date: 要发送的数据；
        4、async: 是否异步 false / true (选填);
        5、success ： 获取完，并成功的回调函数，请求得到的结果，在这里处理(选填)；


*/
function js_ajax(opt) {

    function extend(obj1, obj2) {
        for (var key in obj2) {
            obj1[key] = obj2[key];
        }
    }

    //默认参数
    var defaults = {
        async: true
    };

    //后面使用默认参数
    extend(defaults, opt);

    var now = new Date();
    defaults.data += '&time=' + now.toUTCString();
    var xhr = new XMLHttpRequest();
    if (defaults.type.toLowerCase() == 'get') {
        //get请求
        if (defaults.data) {
            defaults.url += '?' + defaults.data;
        }
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.send(null);
    } else {
        //post请求
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaults.data);
    }
    // console.log(defaults.url);
    //接收数据返回
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (defaults.success) { //如果有数据就返回
                    // !defaults.success || defaults.success(xhr.responseText);
                    defaults.success(xhr.responseText);
                }
            } else {
                alert('错误http状态码是：' + xhr.status);
            }
        }
    };
    // console.log(666);
}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----对cookie进行设置，获取，删除---------//

//面向过程
// var cookie = {
//     //设置
//     set: function (key, value, time) {
//         //获取现在的时间戳；
//         var now = new Date();
//         //设置截止时间；
//         now.setDate(now.getDate() + time);
//         //cookie的格式是：'name=value;exprise=time;path=url'
//         document.cookie = key + '=' + value + ';expires=' + now.toUTCString() + ';path=/'; //设置一个站点内的文件可以共享此cookie
//     },
//     //获取
//     get: function (key) {
//         var str = document.cookie;
//         //str获取到cookie的格式是：'name=caicai; name=kunkun; name=laoxie'
//         var arr1 = str.split('; '); //以分号和空格进行切割 arr1 = ['name=caicai','name=kunkun','name=laoxie'];
//         for (var i = 0; i < arr1.length; i++) {
//             var arr2 = arr1[i].split('='); //['name', 'caicai']
//             if (key == arr2[0]) {
//                 return arr2[1];
//             };
//         };
//     },
//     //删除
//     remove: function (key) {
//         //删除就是把时间改成负(过去)的时间；
//         cookie.set(key, '', -11);
//     }
// };

//=======Cookie面向对象的写法===========

function Cookie() {

    this.name = 'cookie';

}


Cookie.prototype = {
    //设置cookie
    set: function (key, value, time) {

        if (time) {
            //获取现在的时间戳；
            var now = new Date();
            //设置截止时间；
            now.setDate(now.getDate() + time);
            //cookie的格式是：'name=value;exprise=time;path=url'
            document.cookie = key + '=' + value + ';expires=' + now.toUTCString() + ';path=/'; //设置一个站点内的文件可以共享此cookie
        } else {
            document.cookie = key + '=' + value + ';path=/'; //设置一个站点内的文件可以共享此cookie
        }

    },

    //获取
    get: function (key) {
        var str = document.cookie;
        //str获取到cookie的格式是：'name=caicai; name=kunkun; name=laoxie'
        var arr1 = str.split('; '); //以分号和空格进行切割 arr1 = ['name=caicai','name=kunkun','name=laoxie'];
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split('='); //['name', 'caicai']
            if (key == arr2[0]) {
                return arr2[1];
            }
        }
    },

    //删除
    remove: function (key) {
        //删除就是把时间改成负(过去)的时间；
        this.set(key, '', -100);
    }

};

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------



//----设置，获取，删除，清空sessionStorage的方法-----------//

// var session = {
//     //语法：window.sessionStorage.setItem(key,) 或者 window.sessionStorage.key = value;
//     set: function (key, value) {
//         window.sessionStorage.setItem(key, value);
//     },
//     get: function (key) {
//         return window.sessionStorage.getItem(key);
//     },
//     remove: function (key) {
//         window.sessionStorage.removeItem(key);
//     },
//     clear: function () {
//         window.sessionStorage.clear();
//     }

// };


function Session() {
    this.name = 'session';
}

Session.prototype = {
    set: function (key, value) {
        window.sessionStorage.setItem(key, value);
    },
    get: function (key) {
        return window.sessionStorage.getItem(key);
    },
    remove: function (key) {
        window.sessionStorage.removeItem(key);
    },
    clear: function () {
        window.sessionStorage.clear();
    }
};


//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------


//----设置，获取，删除，清空localStorage的方法-----------//
// var local = {
//     //语法：window.localStorage.setItem(key,) 或者 window.localStorage.key = value;
//     set: function (key, value) {
//         window.localStorage.setItem(key, value);
//     },
//     get: function (key) {
//         return window.localStorage.getItem(key);
//     },
//     remove: function (key) {
//         window.localStorage.removeItem(key);
//     },
//     clear: function () {
//         window.localStorage.clear();
//     }

// }

function Local() {

    this.name = 'LocalStorage';

}

Local.prototype = {

    set: function (key, value) {
        window.localStorage.setItem(key, value);
    },
    get: function (key) {
        return window.localStorage.getItem(key);
    },
    remove: function (key) {
        window.localStorage.removeItem(key);
    },
    clear: function () {
        window.localStorage.clear();
    }

}

//----------end----------------------------------------------------------------------------------------------------------------------------------------------------------------

//----node.js 用mongoDB模块封装的函数，查询数据数据库的方法-----------//
//使用时，一键解注释， 740行~~857行
// const {
//     MongoClient,
//     ObjectID
// } = require('mongodb'); //引入mongodb模块

// // Connection URL
// const url = 'mongodb://localhost:27017'; //MongoDB的路径

// // Database Name
// const dbName = 'myMongoDB';

// //链接mongoDB
// const ConnectionMongoDB = () => {

//     return new Promise((resoled, reject) => {
//         // Use connect method to connect to the server
//         MongoClient.connect(url, {
//             useNewUrlParser: true
//         }, (err, client) => {
//             if (err) {
//                 //链接不成功，抛出错误，执行失败的回调
//                 reject(err);
//                 throw err;
//             } else {
//                 //链接成功抛出client
//                 resoled(client);
//             }
//         });
//     });

// };




// //=================查询数据库==========================================================================================================================================================================================
// const select = async (collec, param, cb) => {
//     const client = await ConnectionMongoDB();
//     //链接到MongoDB里的数据库
//     const db = client.db(dbName);
//     // Get the documents collection //确定表(集合)名;
//     const collection = db.collection(collec);
//     // Find some documents //查找到给定参数param的值
//     collection.find(param).toArray(function (err, docs) {
//         if (err) {
//             throw err;
//         } else {
//             cb(docs)
//         }
//     });
//     client.close();
// };


// //====================删除=========================================================================================================================================================================================
// const del = async (collec, param, cb) => {

//     const client = await ConnectionMongoDB();
//     //链接到MongoDB里的数据库
//     const db = client.db(dbName);
//     // Get the documents collection //确定表(集合)名;
//     const collection = db.collection(collec);
//     // Find some documents //查找到给定参数param的值
//     collection.deleteOne(param, (err, docs) => {
//         if (err) {
//             throw err;
//         } else {
//             cb(docs)
//         }
//     });
//     client.close();
// };



// //=======================插入/添加====================================================================================================================================================================================
// //param的格式是[ {key1 : value1, key2 : value2, key3 : value3} ]
// const insert = async (collec, param, cb) => {
//     const client = await ConnectionMongoDB();
//     //链接到MongoDB里的数据库
//     const db = client.db(dbName);
//     // Get the documents collection //确定表(集合)名;
//     const collection = db.collection(collec);
//     // Find some documents //查找到给定参数param的值
//     collection.insertMany(param, (err, docs) => {
//         if (err) {
//             throw err;
//         } else {
//             cb(docs);
//         }
//     });

//     client.close();
// };


// //==========================更改/更新===============================================================================================================================================================================
// //参数说明:collec -> 表名， condition -> 条件  param -> 修改的内容  cb -> 回调
// //param 可以修改多个字段 写法：{key1 : value1, key2 : value2,key3 : value3}
// const updata = async (collec, condition, param, cb) => {
//     const client = await ConnectionMongoDB();
//     //链接到MongoDB里的数据库
//     const db = client.db(dbName);
//     // Get the documents collection //确定表(集合)名;
//     const collection = db.collection(collec);
//     // Find some documents //查找到给定参数param的值
//     collection.updateOne(condition, {
//         $set: param
//     }, (err, docs) => {
//         if (err) {
//             throw err;
//         } else {
//             cb(docs);
//         }
//     });
//     client.close();
// };

//===========导出模块===============================================================================================================================================================
module.exports = {
    // ObjectID,
    // select,
    // del,
    // updata,
    // insert,
    Local,
    Session,
    Cookie,
    getId,
    getTagName,
    getClassName,
    ninToMax,
    noRepeatString,
    noRepeatArray,
    delEmptyVal,
    searchStr,
    objToUrl,
    urlToObject,
    css,
    toDouble,
    secChang,
    getTime,
    randomColor16,
    randomNum,
    randomNumber,
    CheckReg,
    deepClone,
    startMove,
    js_ajax
}




//----------end----------------------------------------------------------------------------------