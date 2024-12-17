const Sequelize = require("sequelize");
const db = require("./db"); // Importa a conexão com o banco de dados

// Define o modelo de Usuário
const Usuario = db.define("users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: false, // Desativa createdAt e updatedAt
});

module.exports = Usuario;
