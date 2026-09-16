# mysql4

Aplicação CRUD simples feita com Node.js, Express, Handlebars e Sequelize, usando um banco MySQL hospedado no [filess.io](https://filess.io). Permite cadastrar/editar/excluir produtos e receber mensagens de um formulário "Fale Conosco".

## Stack

- [Express](https://expressjs.com/) 5 — servidor web
- [express-handlebars](https://github.com/express-handlebars/express-handlebars) — views server-side
- [Sequelize](https://sequelize.org/) + [mysql2](https://github.com/sidorares/node-mysql2) — ORM e driver MySQL
- [dotenv](https://github.com/motdotla/dotenv) — variáveis de ambiente

## Estrutura do projeto

```
├── index.js                  # bootstrap do Express, engine de views e rotas
├── controllers/
│   ├── produtoController.js  # CRUD de produtos
│   └── faleController.js     # envio de mensagens (fale conosco)
├── models/
│   ├── db.js                 # conexão Sequelize (usa variáveis de ambiente)
│   ├── produto.js            # modelo Produtos
│   └── faleConosco.js        # modelo FaleConosco
├── routes/
│   ├── produtoRoutes.js      # /produtos
│   └── faleRoutes.js         # /fale
└── views/                    # templates Handlebars
```

## Rotas

| Método | Rota                  | Descrição                        |
|--------|-----------------------|-----------------------------------|
| GET    | `/`                   | Redireciona para `/produtos`      |
| GET    | `/produtos`           | Lista todos os produtos           |
| GET    | `/produtos/new`       | Formulário de novo produto        |
| POST   | `/produtos/new`       | Cria um produto                   |
| GET    | `/produtos/edit/:id`  | Formulário de edição              |
| POST   | `/produtos/edit/:id`  | Atualiza um produto                |
| POST   | `/produtos/delete/:id`| Remove um produto                  |
| GET    | `/fale/new`           | Formulário de contato              |
| POST   | `/fale/new`           | Envia uma mensagem de contato      |

## Pré-requisitos

- Node.js 22+
- Um banco MySQL acessível (local ou um serviço como o filess.io)

## Configuração

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz do projeto com as credenciais do banco:

   ```env
   DB_NAME=nome_do_banco
   DB_USER=usuario
   DB_PASSWORD=senha
   DB_HOST=host_do_banco
   DB_PORT=3306
   PORT=8081
   ```

3. Rode a aplicação:

   ```bash
   node index.js
   ```

   O servidor sobe em `http://localhost:8081` (ou na porta definida em `PORT`). As tabelas `produtos` e `faleConosco` são criadas automaticamente no banco na primeira execução (`sequelize.sync`).

## Deploy

Projeto preparado para deploy no [Render](https://render.com), conectado a um banco MySQL do filess.io.
