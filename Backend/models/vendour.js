const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const VSchema = new Schema({
 vname: {
    type: String, // Corrected: 'String' should be capitalized
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Consider adding this to ensure unique email addresses
  },
  photo: { 
    type: String 
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  confirm: {
    type: Boolean,
  },
});

// Create the Admin model using the schema
const Admin = mongoose.model('vendours', VSchema);

module.exports = Admin;
