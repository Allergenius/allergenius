const Sequelize = require("sequelize")
const db = {}
const mysql = require('mysql')
const dotenv = require('dotenv');

dotenv.config()

// const localConfig = {
//     host: process.env.JAWS_HOST,
//     user: process.env.JAW_USER,
//     password: process.env.JAWS_PW,
//     database: process.env.JAWS_DATABASE,
//     port: 3306,
//     dialect: mysql,
//     operatorsAliases: false,

//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// }



// var sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL) : new Sequelize(process.env.JAWS_DATABASE, process.env.JAW_USER, process.env.JAWS_PW, {
//     host: process.env.JAWS_HOST,
//     dialect: mysql,
//     port: 3306,
//     operatorsAliases: false,
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// })
console.log(process.env.JAWS_HOST)

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