const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({

  name: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  shortDesc: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  }

})

module.exports = mongoose.model('Products', ProductsSchema)