const knex = require('knex');
const configuration = require('./../../knexfile');

//Acessa o knex e passa como argumento a configuração do banco de dados de dev.
const connection = knex(configuration.development)

module.exports = connection;