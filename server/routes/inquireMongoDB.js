(() => {
    const {
        MongoClient,
        ObjectID
    } = require('mongodb');

    // Connection URL
    const url = 'mongodb://localhost:27017';

    // Database Name
    const dbName = 'program';

    //链接mongoDB
    const ConnectionMongoDB = () => {

        return new Promise((resoled, reject) => {
            // Use connect method to connect to the server
            MongoClient.connect(url, {
                useNewUrlParser: true
            }, (err, client) => {
                if (err) {
                    //链接不成功，抛出错误，执行失败的回调
                    reject(err);
                    throw err;
                } else {
                    //链接成功抛出client
                    resoled(client);
                };
            });
        });

    };




    //=================查询数据库================================
    const select = async (collec, param, cb) => {
        const client = await ConnectionMongoDB();
        //链接到MongoDB里的数据库
        const db = client.db(dbName);
        // Get the documents collection //确定表(集合)名;
        const collection = db.collection(collec);
        // Find some documents //查找到给定参数param的值
        collection.find(param).toArray(function (err, docs) {
            if (err) {
                throw err;
            } else {
                cb(docs)
            }
        });

        client.close();

    };

    //=================条件限制查询数据库================================
    const limitSelect = async (collec, param, cb) => {
        const client = await ConnectionMongoDB();
        //链接到MongoDB里的数据库
        const db = client.db(dbName);
        // Get the documents collection //确定表(集合)名;
        const collection = db.collection(collec);
        // Find some documents //查找到给定参数param的值
        collection.find(param).toArray(function (err, docs) {
            if (err) {
                throw err;
            } else {
                cb(docs)
            }
        });

        client.close();

    };


    //====================删除===============================
    const del = async (collec, param, cb) => {

        const client = await ConnectionMongoDB();
        //链接到MongoDB里的数据库
        const db = client.db(dbName);
        // Get the documents collection //确定表(集合)名;
        const collection = db.collection(collec);
        // Find some documents //查找到给定参数param的值
        collection.deleteOne(param, (err, docs) => {
            if (err) {
                throw err;
            } else {
                cb(docs)
            }
        });
        client.close();
    };



    //=======================插入/添加==========================
    //param的格式是[ {key1 : value1, key2 : value2, key3 : value3} ]
    const insert = async (collec, param, cb) => {
        const client = await ConnectionMongoDB();
        //链接到MongoDB里的数据库
        const db = client.db(dbName);
        // Get the documents collection //确定表(集合)名;
        const collection = db.collection(collec);
        // Find some documents //插入参数param的值
        collection.insertMany(param, (err, docs1) => {
            if (err) {
                throw err;
            } else {
                cb(docs1);
            }
        });

        client.close();
    };


    //==========================更改/更新=====================
    //参数说明:collec -> 表名， condition -> 条件  param -> 修改的内容  cb -> 回调
    //param 可以修改多个字段 写法：{key1 : value1, key2 : value2,key3 : value3}
    const updata = async (collec, condition, param, cb) => {
        const client = await ConnectionMongoDB();
        //链接到MongoDB里的数据库
        const db = client.db(dbName);
        // Get the documents collection //确定表(集合)名;
        const collection = db.collection(collec);
        // Find some documents //查找到给定参数param的值
        collection.updateOne(condition, {
            $set: param
        }, (err, docs) => {
            if (err) {
                throw err;
            } else {
                cb(docs);
            }
        });
        client.close();
    };

    //===========导出模块=======================================
    module.exports = {
        ObjectID,
        select,
        del,
        updata,
        insert,
        limitSelect
    }



})();