const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'program';
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                reject(err);
                throw err;
            } else {
                resolve(client);
            }
        });
    });
}

const find = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(params).toArray(function (err, docs) {
            if (err) {
                reject(err);
            } else {    
                resolve(docs);
            }
        });
        client.close();
    });
}
const update = (col, data, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.updateOne(data, params, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        client.close();
    });
}
const del = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection[Array.isArray(params) ? 'deleteMany' : 'deleteOne'](params, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        client.close();
    });
}
const insert = (col, params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection[Array.isArray(params) ? 'insertMany' : 'insertOne'](params, function (err, docs) {
            if (err) {
                reject(err);
            } else {
                resolve(docs);
            }
        });
        client.close();
    });
}
module.exports = {
    connect,
    find,
    update,
    del,
    insert,
    ObjectId
}