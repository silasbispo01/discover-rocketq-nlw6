const express = require('express');
const routes = express.Router();
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
routes.get('/create-pass-room', (req, res) => res.render("index", {page: 'create-pass-room'}))
routes.get('/room/:room', (req, res) => res.render("room"))

//routes.post('/room/323232/2/check')
routes.post('/question/:room/:question/:action', QuestionController.index)
routes.post('/create-room', RoomController.create)
module.exports = routes