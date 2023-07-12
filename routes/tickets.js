const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
// router.get('/tickets/new', ticketsCtrl.new);
// POST /performers (create functickets
// router.post('/tickets', ticketsCtrl.create);
// POST /movies/:id/performers (associate a performer with a movie)
router.post('/flights/:id/tickets', ticketsCtrl.addTicket);
module.exports = router;