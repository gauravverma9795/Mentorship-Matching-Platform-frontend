import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Matchmaking = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/match', { params: { userId: 'your_user_id' } });
        setMatches(response.data);
      } catch (error) {
        alert('Failed to fetch matches: ' + error.response.data.error);
      }
    };
    fetchMatches();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-2xl font-bold text-primary mb-4">Mentorship Matches</h1>
      <ul className="w-2/3 bg-white shadow-md rounded p-4">
        {matches.map((match) => (
          <li 
            key={match.id} 
            className="p-2 border-b border-secondary flex justify-between"
          >
            <span>{match.username} - {match.role}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matchmaking;