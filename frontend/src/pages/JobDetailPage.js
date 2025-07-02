import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/jobs.css';

const JobDetail = () => {
  const { state: job } = useLocation();
  const navigate = useNavigate();

  const handleApply = () => {
    alert(`You applied to: ${job.title}`);
    navigate(-1); // Go back to job list
  };

  if (!job) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{job.title}</h2>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Salary:</strong> {job.salary || 'Not specified'}</p>
      <button onClick={handleApply}>Apply</button>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
};

export default JobDetail;
