const  Sequelize  = require("sequelize")

const sequelize = new Sequelize("armando", "root", "123456",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate() // testando a conexão
.then(function() {
    console.log("Conexão com o banco realizada com sucesso!")
}).catch(function() {
    console.log("Errro Não foi possível realizar a conexão com o banco.")
})

module.exports = sequelize;