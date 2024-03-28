const MongoClient = require('mongodb').MongoClient;
require('dotenv').config({ path: '../.env' });

const dbUri = process.env.MONGO_DB_URI;
const options = {
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true
}

const connectDB = MongoClient.connect(dbUri, options)
.then((db) => {
    accountsDb = db;
    collection= accountsDb.db('testCollection');
    console.log('Successfully connected to MondoDB');
})
.catch((err) => {
    console.log(err);
})

module.exports = connectDB;