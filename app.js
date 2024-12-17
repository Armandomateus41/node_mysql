const express = require("express");
const usuario = require("./models/usuario"); // Importa o modelo Sequelize 'usuario'

const app = express();
app.use(express.json()); // Habilita o body-parser para JSON

// ================== ROTAS ================== //

// Rota para buscar todos os usuários
app.get("/user", async (req, res) => {
  try {
    const users = await usuario.findAll({ order: [["id", "DESC"]] });
    return res.json({
      erro: false,
      users,
    });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error.message);
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao buscar os usuários!",
    });
  }
});

// Rota para buscar um usuário pelo ID
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({
        erro: true,
        mensagem: "Usuário não encontrado!",
      });
    }
    return res.json({
      erro: false,
      user,
    });
  } catch (error) {
    console.error("Erro ao buscar usuário:", error.message);
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao buscar o usuário!",
    });
  }
});

// Rota para criar um novo usuário
app.post("/user", async (req, res) => {
  try {
    const { nome, email } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !email) {
      return res.status(400).json({
        erro: true,
        mensagem: "Os campos 'nome' e 'email' são obrigatórios!",
      });
    }

    // Verifica se o email já existe
    const userExists = await usuario.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({
        erro: true,
        mensagem: "Email já cadastrado!",
      });
    }

    // Cria o usuário no banco
    const user = await usuario.create({ nome, email });

    return res.json({
      erro: false,
      mensagem: "Usuário criado com sucesso!",
      user,
    });
  } catch (error) {
    console.error("Erro ao criar usuário:", error.message);

    // Tratamento específico para email duplicado
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        erro: true,
        mensagem: "Email já está em uso!",
      });
    }

    return res.status(500).json({
      erro: true,
      mensagem: "Erro interno ao tentar criar o usuário!",
    });
  }
});

// Rota para atualizar informações de um usuário
app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const user = await usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({
        erro: true,
        mensagem: "Usuário não encontrado!",
      });
    }

    await user.update({ nome, email }); // Atualiza os dados do usuário

    return res.json({
      erro: false,
      mensagem: "Usuário atualizado com sucesso!",
      user,
    });
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error.message);
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao tentar atualizar o usuário!",
    });
  }
});

// Rota para excluir um usuário pelo ID
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await usuario.findByPk(id);
    if (!user) {
      return res.status(404).json({
        erro: true,
        mensagem: "Usuário não encontrado!",
      });
    }

    await user.destroy(); // Remove o usuário do banco
    return res.json({
      erro: false,
      mensagem: `Usuário com ID ${id} foi removido com sucesso!`,
    });
  } catch (error) {
    console.error("Erro ao remover usuário:", error.message);
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao tentar remover o usuário!",
    });
  }
});

// ================== INICIALIZAÇÃO DO SERVIDOR ================== //
app.listen(8080, async () => {
  console.log("API rodando na porta 8080");
});
