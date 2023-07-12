const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
    type: String,
    required: true,
    enum: [`AUS`, `DFW`, `DEN`, `LAX`, `SAN`], 
    default: `DEN`,
    },
    arrivalDate: {
    type: Date,
    required: true,
    default: function() {
    return new Date().getFullYear() + 1;
    },
    min: () => new Date().getFullYear(),
    }
  }, 
  {
    timestamps: true
  });

const flightSchema = new Schema({
  airline: { 
    type: String,
    required: true,
    enum: [`American`, `Southwest`, `United`],
    default: `Delta`,
    },
  airport: {
    type: String,
    enum: [`AUS`, `DFW`, `DEN`, `LAX`, `SAN`], 
    default: `DEN`,
    },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departsDate: {
    type: Date,
    required: true,
    default: function() {
    return new Date().getFullYear() + 1;
    },
    min: () => new Date().getFullYear(),
  },
  destinations: [destinationSchema]
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);