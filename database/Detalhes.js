const Sequelize = require("sequelize")
const connection = require("./database.js")

//Model representar a tabela com javascript
const Detalhes = connection.define("detalhe", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    parcelas: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    cores: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    tamanhos: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//sincronizar Pergunta com o banco de dados
//Force serve pra nao criar a tabela se caso ela ja existir
Detalhes.sync({force: false}).then(() => {})

module.exports = Detalhes