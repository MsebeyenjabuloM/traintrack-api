const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  program: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  date: { type: Date, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Session', sessionSchema);
