const Sequelize = require("sequelize")
const db = {}
const mysql = require('mysql')
const dotenv = require('dotenv');

dotenv.config()


if (process.env.JAWSDB_URL){
    var sequelize = new Sequelize(process.env.JAWSDB_URL)

} else {
    var sequelize = new Sequelize("allergenius_db", "root", "root", {
        host: 'localhost',
        dialect: 'mysql',
        port: '8889', //change for Mac
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });
}


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db