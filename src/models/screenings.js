const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Screenings', new Schema({
  movie: {
    type: Schema.Types.ObjectId,
    ref: 'Movies',
    required: true,
  },
  theater: {
    type: Schema.Types.ObjectId,
    ref: 'Theaters',
    required: true,
  },
  attendenceTotal: {
    type: Number,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  admissionsTotal: {
    type: Number,
    required: true,
  },
  concessionsTotal: {
    type: Number,
  },
  format: {
    type: String,
  },
}));