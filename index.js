const express = require("express");
const app = express();
const PORT = 3000;

// Lista de usuários
const usuarios = [
  { nome: "Ana", cidade: "Sao Paulo" },
  { nome: "João", cidade: "Rio de Janeiro" },
  { nome: "Mariana", cidade: "Salvador" },
  { nome: "Lucas", cidade: "Curitiba" },
  { nome: "Pedro", cidade: "Florianopolis" },
  { nome: "Sofia", cidade: "Ouro Preto" },
  { nome: "Gabriel", cidade: "Gramado" },
  { nome: "Laura", cidade: "Paraty" },
  { nome: "Isabela", cidade: "Recife" },
  { nome: "Rafael", cidade: "Manaus" },
];

// 1. Rota para obter todos os usuários
app.get("/usuario/todos", (req, res) => {
  const listaHTML = usuarios
    .map((u) => `<li><strong>${u.nome}</strong> - ${u.cidade}</li>`)
    .join("");

  res.send(`
      <html>
        <head>
          <title>Usuários</title>
        </head>
        <body>
          <ul>
            ${listaHTML}
          </ul>
        </body>
      </html>
    `);
});

// 2. Rota para obter usuários por cidade
app.get("/usuario/cidade/:cidade", (req, res) => {
  const cidadeParam = req.params.cidade.toLowerCase();
  const filtrados = usuarios.filter(
    (u) => u.cidade.toLowerCase() === cidadeParam
  );
  res.json(filtrados);
});

// 3. Rota para obter um usuário sorteado
app.get("/usuario/sorteado", (req, res) => {
  const index = Math.floor(Math.random() * usuarios.length);
  res.json(usuarios[index]);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
