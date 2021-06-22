const Sequelize = require('sequelize')

const connection = new Sequelize('anstore', 'andreydev', 'Krauthein2005',{
    host: 'mysql742.umbler.com',
    dialect: 'mysql',
})

module.exports = connection