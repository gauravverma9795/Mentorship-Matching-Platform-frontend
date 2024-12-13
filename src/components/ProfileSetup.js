import React, { useState } from 'react';
import axios from 'axios';

const ProfileSetup = () => {
  const [profileData, setProfileData] = useState({ skills: '', interests: '', bio: '' });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/profile', profileData);
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Profile update failed: ' + error.response.data.error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-2xl font-bold text-primary mb-4">Profile Setup</h1>
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        name="skills" 
        placeholder="Skills" 
        onChange={handleChange} 
      />
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        name="interests" 
        placeholder="Interests" 
        onChange={handleChange} 
      />
      <textarea 
        className="mb-2 p-2 border border-secondary rounded" 
        name="bio" 
        placeholder="Bio" 
        onChange={handleChange}
      ></textarea>
      <button 
        className="p-2 bg-primary text-white rounded hover:bg-secondary" 
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default ProfileSetup;