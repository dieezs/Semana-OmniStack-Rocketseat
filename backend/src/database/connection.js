const knex = require('knex');
const configuration = require('./../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development

//Acessa o knex e passa como argumento a configuração do banco de dados de dev.
const connection = knex(config)

module.exports = connection;