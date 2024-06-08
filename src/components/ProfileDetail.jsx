import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './transitions.css';

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [inProp, setInProp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://express-t4.onrender.com/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setInProp(true);
      });
  }, [id]);

  const handleBackClick = () => {
    setInProp(false);
    setTimeout(() => navigate('/profiles'), 500);  // Ensure this timeout matches the transition duration
  };

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <CSSTransition in={inProp} timeout={500} classNames="fade" unmountOnExit>
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <img src={user.picture} alt={user.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="text-gray-700 mb-2"><strong>Phone:</strong> {user.phone}</p>
          <button
            onClick={handleBackClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Back
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProfileDetail;
