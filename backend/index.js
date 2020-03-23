const express = require('express')
const app = express();

app.get('/', (request, response) => {
    return response.json({
        name: 'diego',
        age: 20
    })
})

app.listen(3333);

