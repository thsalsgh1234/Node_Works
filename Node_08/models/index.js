const path = require("path")

/*
    현재 작동되는 환경을 development 환경으로 설정하고 그에 맞는 DB 정보를 설정하기
*/
const env = process.env.NODE_ENV || 'development'
const configPath = path.join(__dirname,"..","config","config.json")

const c1 = require(configPath)

const config = require(configPath)[env]
const Sequelize = require("sequelize")

let sequelize = new Sequelize(config.database,config.username,config.password, config)

var database = {}

// db 설정값이 추가된 seq.. 객체
database.sequelize = sequelize

// Sequelize 클래스를 static 으로 사용하기 위한 설정
database.DataTypes = Sequelize

// seq 객체와 Seq 클래스를 static을 매개변수로 전달 bbsVO에게
database.bbsVO = require("./bbsVO")(sequelize,Sequelize)

module.exports = database