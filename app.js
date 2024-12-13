const express = require("express");

 const db = require("./models/db"); // Importa o arquivo db.js

// Configura a porta do Express
const app = express();

app.use(express.json()); // habilita o body-parser para interpretar JSON

// Configura a porta do Express
// usuario
app.get("/usuarios", (req, res) => {
  return res.json({
    erro: false,
    nome: "Armando",
    email: "armando@example.com",
    telefone: "(11) 9999-9999",
  });
});

// Busca um usuário pelo ID
app.get("/usuario/:id", (req, res) => {
  const { id } = req.params.id;
  return res.json({
    erro: false,
    id,
    nome: "Armando",
    email: "armando@example.com",
    telefone: "(11) 9999-9999",
  });
});

// tipo de requisição POST para adicionar um novo usuário
app.post("/usuario", (req, res) => {
  const { nome, email } = req.body; // Assumindo que o body tem nome
  return res.json({
    erro: false,
    nome,
    email,
    telefone: "(11) 9999-9999",
  });
});

// tipo de requisição PUT para atualizar um usuário e editar um campo específico

app.put("/usuario", (req, res) => {
  const { id, nome, email, telefone } = req.body; // Assumindo que o body tem nome e id
  return res.json({
    erro: false,
    id,
    nome,
    email,
    telefone: "(11) 9999-9999",
    
  });
});

// tipo de requisição DELETE para remover um usuário
app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params; // Assumindo que o body tem nome e id
    return res.json({
      erro: false,
      id,

      
    });
  });
  
app.listen(8080, () => {
  console.log("API rodando na porta 8080"); // Loga a mensagem na console quando a API estiver rodando
});
