import { useNavigate } from 'react-router-dom';

const JobListPage = ({ jobs }) => {
  const navigate = useNavigate();

  const handleClick = (job) => {
    navigate(`/job/${job.id}`, { state: job }); // send job details via navigation state
  };

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="job-card"
          onClick={() => handleClick(job)}
          style={{ cursor: 'pointer' }}
        >
          <h3>{job.title}</h3>
          <p><strong>Location:</strong> {job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};
export default JobListPage;