const Sequelize = require('sequelize')

const connection = new Sequelize('an-store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection