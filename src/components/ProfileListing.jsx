import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css';

const Profiles = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://express-t4.onrender.com/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUserClick = (id) => {
    navigate(`/profiles/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <CSSTransition key={user._id} timeout={500} classNames="fade">
            <div 
              onClick={() => handleUserClick(user._id)}
              className="block p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <img src={user.picture} alt={user.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h2 className="text-xl font-bold">{user.name}</h2>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Profiles;
