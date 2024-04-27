import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Logout = () => {
 const navigate = useNavigate(); // Initialize useNavigate

 const handleLogout = () => {
    // Perform any logout logic here, such as clearing user data from state or local storage

    // Navigate to the Home page
    navigate('/Home'); // Adjusted to match your specified path
 };

 return (
    <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
      <h2 style={{ color: 'darkblue' }}>*Logout*</h2>
    </div>
 );
};

export default Logout;
