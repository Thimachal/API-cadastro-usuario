const express = require('express');
const {listar, obter, cadastrar, atualizar, excluir} = require('./controllers/users');

const routes = express();

routes.get('/users', listar);
routes.get('/users/:id', obter);
routes.post('/users', cadastrar);
routes.put('/users/:id', atualizar);
routes.delete('/users/:id', excluir);

module.exports = routes;