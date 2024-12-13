// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ProfileSetup from './components/ProfileSetup';
import Matchmaking from './components/Matchmaking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileSetup />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
      </Routes>
    </Router>
  );
};

export default App;