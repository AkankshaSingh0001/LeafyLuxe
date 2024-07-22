// const mongoose = require('mongoose');
// const Schema=mongoose.Schema;

// const adminSchema = new Schema({
//     userId:{type:Schema.Types.ObjectId},
//     date: Date,
//     timeSlot: String
// });

// // Create the Admin model using the schema
// const Admin = mongoose.model('appointments', adminSchema);

// module.exports = Admin;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define appointment schema
const appointmentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true }
});

// Create the Appointment model using the schema
const Appointment = mongoose.model('appointments', appointmentSchema);

module.exports = Appointment;
