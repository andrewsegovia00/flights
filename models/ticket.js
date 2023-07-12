const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/,
    // default: `Z0`,
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight',
    default: null,
  }
  },
  {
  timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);