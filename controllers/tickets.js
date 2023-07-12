const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addTicket
};

async function addTicket(req, res) {
    console.log(req.params.id)
    console.log(req.body.seat)
    console.log(req.body.price)
    
  const flight = await Flight.findById(req.params.id);
  try {
    await Flight.create(req.body);
    // res.redirect('/flights/');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
  Ticket.create(flight);

  const tickets = await Ticket.find({}).sort('seat');
  res.render('tickets/new', { title: 'Add Ticket', tickets });

  res.redirect(`/flights/${flight._id}, `);
}

async function newTicket(req, res) {
  const tickets = await Ticket.find({}).sort('seat');
  res.render('tickets/new', { title: 'Add Ticket', tickets });
}

async function create(req, res) {
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/tickets/new');
}