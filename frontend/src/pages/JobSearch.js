import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/jobs.css';

const SearchJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/jobs'); // ✅ CORRECT ENDPOINT
        setJobs(res.data);
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  const handlePostJobClick = () => {
    navigate('/post-job');
  };

  const handleJobClick = (job) => {
    navigate(`/job/${job._id}`, { state: job }); // ✅ Pass job details
  };

  return (
    <div className="container">
      <div className="top-bar">
        <h2>Available Jobs</h2>
        <button className="post-btn" onClick={handlePostJobClick}>+ Post a Job</button>
      </div>

      {jobs.map((job) => (
        <div
          key={job._id}
          className="job-card"
          onClick={() => handleJobClick(job)}
          style={{ cursor: 'pointer' }}
        >
          <h3>{job.title}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}

      <button className="back-btn" onClick={() => navigate(-1)}>← Previous Page</button>
    </div>
  );
};

export default SearchJobs;
