const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

// Página inicial
routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}))

// Rota de Criação de Código de Sala
routes.get('/create-pass-room', (req, res) => res.render("index", {page: 'create-pass-room'}))
// Rota para sala já existente pela url
routes.get('/room/:room', RoomController.open)


// Post para sala já existente pela página incial
routes.post('/enter-room', RoomController.enter)
// Post para criação de Sala
routes.post('/create-room', RoomController.create)
// Post para criação de Question
routes.post('/question/create/:room', QuestionController.create)
// Post para ação no modal (excluir pergunta ou marcar como vizualizada)
//routes.post('/room/323232/2/check')
routes.post('/question/:room/:question/:action', QuestionController.index)
module.exports = routes