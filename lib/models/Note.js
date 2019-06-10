const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true
  },
  body: {
    type: String,
    minlength: 1,
    maxlength: 10000,
    required: true
  }
});


module.exports = mongoose.model('Note', noteSchema);
