// routes/labtest.js
const express = require('express');
const router = express.Router();
const LabTest = require('../models/Labtest');

// Route to add a new lab test
router.post('/labtests/book', async (req, res) => {
  try {
    const { name, email, phone, city, pincode, testId, testName } = req.body;

    // Create a new LabTest instance
    const newLabTest = new LabTest({
      testName: testName,
      testId: testId,
      name,
      email,
      phone,
      city,
      pincode,
    });

    // Save the lab test to the database
    await newLabTest.save();

    // Respond with success message
    res.status(201).json({ message: 'Lab test booked successfully' });
  } catch (error) {
    console.error('Error booking lab test:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
