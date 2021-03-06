const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const {errors} = require('celebrate')

const app = express();


app.use(cors())
app.use(express.json());
app.use(routes)
app.use(errors())
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



module.exports = app