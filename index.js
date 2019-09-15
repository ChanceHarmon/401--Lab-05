'use strict';
require('dotenv').config();

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });

// Do some work
const categories = new Categories();

const workItMongo = async () => {
  const sampleCategory = {
    name: 'Coat',
    description: 'For cold weather',
  };
  s
  let newCategory = await categories.create(sampleCategory);
  //console.log('Category Created', newCategory);

  let oneCategory = await categories.get(sampleCategory._id);
  // console.log('One Category', oneCategory);

  // Disconnect
  mongoose.disconnect();

};

workItMongo();