const express = require('express');
const crypto = require('crypto')
const connectionDataBase = require('./database/connection')
const routes = express.Router();
// const params = request.query; Acessado via Parametro Query
// const params = request.params; Acessado via Parametro Route
// const body = request.body; //Acessado via Parametro Body

routes.post('/ongs', async (request, response) => {
    
    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX')
    
    await connectionDataBase('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return response.json( { id } );

});

module.exports = routes