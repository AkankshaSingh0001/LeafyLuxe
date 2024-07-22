const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const adminSchema = new Schema({
  username: {
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
  role: {
    type: String,
    required: true,
    enum: ['admin', 'superadmin'], // Corrected: Role values should be strings
  },
});

// Create the Admin model using the schema
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
