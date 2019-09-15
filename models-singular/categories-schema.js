'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('categories', categorySchema);