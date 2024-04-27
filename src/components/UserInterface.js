// UserInterface.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ATask from './components/ATask';
import DisplayTask from './components/DisplayTask';
import Users from './components/Users';
import './UserInterface.css'; // Import the CSS file


const UserInterface = () => {
 return (
    <Router>
      <div className="user-interface">
        <nav className="side-navbar">
          <ul>
            <li><Link to="/ATask">ATask</Link></li>
            <li><Link to="/DisplayTask">DisplayTask</Link></li>
            <li><Link to="/Users">Users</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/ATask" element={<ATask />} />
            <Route path="/DisplayTask" element={<DisplayTask />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </Router>
 );
};

export default UserInterface;
