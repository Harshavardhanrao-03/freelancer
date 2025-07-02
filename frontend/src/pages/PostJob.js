import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/jobs.css';

const PostJob = () => {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    salary: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ FIXED endpoint — removed `/post`
      await axios.post('http://localhost:3001/api/jobs', job);
      alert('Job posted successfully!');
      navigate(-1); // Go back
    } catch (err) {
      alert('Failed to post job');
      console.error(err); // optional: for debugging
    }
  };

  return (
    <div className="container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Job Description" value={job.description} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} required />
        <input name="salary" placeholder="Salary (optional)" value={job.salary} onChange={handleChange} />
        <button type="submit">Post Job</button>
      </form>
      <button className="back-btn" onClick={() => navigate(-1)}>← Previous Page</button>
    </div>
  );
};

export default PostJob;
