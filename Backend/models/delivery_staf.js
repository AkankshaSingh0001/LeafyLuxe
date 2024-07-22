const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const ServiceScbema = new Schema({
  name: {
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
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true // Corrected: Role values should be strings
  },
  order_id: {
    type: String,
     // Corrected: Role values should be strings
  },
  availability:{
    type: Boolean,
    
  }
});

// Create the Admin model using the schema
const Service_Team = mongoose.model('deliverystaff', ServiceScbema);

module.exports = Service_Team;
