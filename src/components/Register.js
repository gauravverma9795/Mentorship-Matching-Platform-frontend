import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'mentor',
    skills: '',
    interests: '',
    bio: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', formData);
      alert('Registration successful!');
    } catch (error) {
      alert('Registration failed: ' + error.response.data.error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-2xl font-bold text-primary mb-4">Register</h1>
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        name="username" 
        placeholder="Username" 
        onChange={handleChange} 
      />
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        name="password" 
        type="password" 
        placeholder="Password" 
        onChange={handleChange} 
      />
      <select 
        className="mb-2 p-2 border border-secondary rounded"
        name="role" 
        onChange={handleChange}
      >
        <option value="mentor">Mentor</option>
        <option value="mentee">Mentee</option>
      </select>
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
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
  );
};

export default Register;