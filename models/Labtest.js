// models/labtest.js
const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  testName: String,
  testId: String,
  name: String,
  email: String,
  phone: String,
  city: String,
  pincode: String,
});

const LabTest = mongoose.model('LabTest', labTestSchema);

module.exports = LabTest;
