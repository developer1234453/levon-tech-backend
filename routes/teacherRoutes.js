const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// Create a new teacher
router.post('/', async (req, res) => {
  const { name, subject, userId } = req.body;
  try {
    const teacher = new Teacher({ name, subject, userId });
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
