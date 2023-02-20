import express = require('express');
import bodyParser = require('body-parser');
import { decode } from 'jsonwebtoken';
const jwt = require('jwt-simple');
const jwtDecode = require('jwt-decode')
let cors = require('cors');

export default (app: express.Application) => {
    app.use(bodyParser.json({limit: "50mb"}));
    app.use(cors());
    app.use(checkAuth);
}

function checkAuth(req:any, res:any, next:any) {

    const authorizedUser = {
      id: "1",
      nombre: "Ismael Spalletta"
    };

    const token = req.headers.authorization.split(" ")[1];
    
    const decoded = jwtDecode(token);
    
    const requestingUser = decoded.id;
  
    if (requestingUser === authorizedUser.id) {
      next();
    } else {
      res.status(401).json({ message: "No autorizado" });
    }
}
