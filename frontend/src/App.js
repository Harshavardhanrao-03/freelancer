import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import JobSearch from './pages/JobSearch';
import PostJob from './pages/PostJob';
import Signup from './pages/Signup';
import JobDetailPage from './pages/JobDetailPage';
import JobListPage from './pages/JobListPage';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<JobSearch />} />
      <Route path="/post-job" element={<PostJob />} />
       <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobListPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
    </Routes>
  </Router>
);

export default App;
