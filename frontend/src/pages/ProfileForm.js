import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ProfileForm = () => {
  const location = useLocation();
  const { email = '', phone = '' } = location.state || {};

  const [form, setForm] = useState({
    phone,
    name: '',
    age: '',
    location: '',
    email,
    profilePicUrl: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/auth/profile', form);
      alert('✅ Profile saved!');
    } catch (err) {
      alert('❌ Failed to save profile: ' + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(form).map(([key, value]) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={value}
            onChange={handleChange}
            required={['phone', 'email'].includes(key)} // make phone/email required
            style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '8px' }}
          />
        ))}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfileForm;
