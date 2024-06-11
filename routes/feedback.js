const express = require('express');
const router = express.Router();

// POST route to handle feedback submission
router.post('/submit', (req, res) => {
  const feedback = req.body.feedback;

  // Check if feedback exists
  if (!feedback) {
    return res.status(400).json({ error: 'Feedback is required' });
  }

  // Process the feedback (e.g., save to database)
  // For demonstration purposes, just log it to console
  console.log('Received feedback:', feedback);

  // Send back success message
  res.status(200).json({ message: 'Feedback submitted successfully!' });
});

module.exports = router;
