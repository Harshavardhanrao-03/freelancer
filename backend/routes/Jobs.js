const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// POST a new job
router.post('/jobs', async (req, res) => {
   console.log('🔵 POST /api/jobs hit'); // Add this log
  console.log(req.body);
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET all jobs
router.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// GET a specific job by ID
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(404).json({ error: 'Job not found' });
  }
});

module.exports = router;
