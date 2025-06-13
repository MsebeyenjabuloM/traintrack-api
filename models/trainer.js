const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  certifications: [String]
});

module.exports = mongoose.model('Trainer', trainerSchema);
