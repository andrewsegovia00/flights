const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create,
  addTicket
};

async function addTicket(req, res) {
  const flight = await Flight.findById(req.params.id);
    req.body.flight = flight;
  await Ticket.create(req.body);

  res.redirect(`/flights/${req.params.id}`);
}

async function newTicket(req, res) {
try {
  const tickets = await Ticket.find({}).sort('seat');
  res.render('tickets/new', { title: 'Add Ticket', tickets });
} catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/tickets/new');
}