# API de Usuários com Node.js e Express

Uma API simples que lista usuários, filtra por cidade e retorna um usuário sorteado.

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

## 🔗 Rotas disponíveis

| Método | Rota                         | Descrição                                       |
|--------|------------------------------|------------------------------------------------|
| `GET`  | `/usuario/todos`            | Retorna todos os usuários em uma lista HTML    |
| `GET`  | `/usuario/cidade/:cidade`   | Retorna os usuários que moram na cidade informada |
| `GET`  | `/usuario/sorteado`         | Retorna um usuário aleatório da lista          |

## ▶️ Executar o projeto

Para iniciar o servidor, execute o seguinte comando no terminal:

```bash
node index.js
