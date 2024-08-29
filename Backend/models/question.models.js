const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
  question: String,
  answer: mongoose.Schema.Types.Mixed // Can handle both strings and arrays
});

const QA = mongoose.model('QA', qaSchema);

module.exports=QA;