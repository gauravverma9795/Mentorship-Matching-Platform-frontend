import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/auth/login', { username, password });
      alert('Login successful!');
    } catch (error) {
      alert('Login failed: ' + error.response.data.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-2xl font-bold text-primary mb-4">Login</h1>
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        className="mb-2 p-2 border border-secondary rounded"
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button 
        className="p-2 bg-primary text-white rounded hover:bg-secondary" 
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
