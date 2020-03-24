const express = require('express')
const routes = require('./routes')
const app = express();
app.use(express.json());
app.use(routes)

// Métodos HTTP:
// GET: Buscar informação no backend
// POST: Criar informação no backend
// PUT: Alterar informação no backend
// DELETE: Delete informação no backend

// Tipos de Parametro
// Query: parametros nomeados enviados na rota apos o '?'. Usado para filtro, paginacao,
// Route: Parametros utilizados para identificar recurso
// Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos

// SQL: MySQL, SQLite, PostgreSQL, Microsoft SQL Server
// NoSQL: MongoDB, CouchDB, etc 

// Driver: SELECT * FROM USERS;
// Query Builder(Javascript): table('users).select('*').where('')



app.listen(3333)