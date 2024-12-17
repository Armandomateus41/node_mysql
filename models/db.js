const Sequelize = require("sequelize");

// Configura a conexão com o banco de dados MySQL
const db = new Sequelize("armando", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Desativa os logs SQL no terminal
});

// Testa a conexão com o banco
db.authenticate()
  .then(() => {
    console.log("Conexão com o banco realizada com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco:", error.message);
  });

module.exports = db;
