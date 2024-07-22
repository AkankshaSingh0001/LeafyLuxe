const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const orderSchema = new Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    // product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    product: String,
    quantity: Number,
    totalAmount: Number,
    status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered'], default: 'Pending' }
  }, { timestamps: true });


  const Order = mongoose.model('orders', orderSchema);
 
  module.exports = Order;