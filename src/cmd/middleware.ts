import express = require('express');
import bodyParser = require('body-parser');
let cors = require('cors');

export default (app: express.Application) => {
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(cors());
    // sumar todo middleware que se quiera utilizar
}