// order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  pincode: String,
  cartItems: [{
    id: Number,
    name: String,
    price: Number,
    quantity: Number,
  }],
  total: Number,
  formData: {
    name: String,
    email: String,
    address: String,
    city: String,
    pincode: String,
  }
});


const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
