import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Dashboard.css';
import dash1 from './dash1.jpg';

const Dashboard = () => {
  return (
     <div className="dashboard" style={{ backgroundImage: `url(${dash1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh', width: '100%' }}>
       <h1>Welcome to Dashboard</h1>
       <div className="kanban-board">
          <div className="kanban-column to-do">
            <h2>To-Do</h2>
            <AddIcon className="add-icon" />
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Attend a Party</p>
            </div>
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Write Homework</p>
            </div>
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Water the plants</p>
            </div>
            {/* Add more cards as needed */}
          </div>
          <div className="kanban-column doing">
            <h2>Doing</h2>
            <AddIcon className="add-icon" />
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Clean the Room</p>
            </div>
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Give a Surprise Birthday Party</p>
            </div>
            {/* Add more cards as needed */}
          </div>
          <div className="kanban-column completed">
            <h2>Completed</h2>
            <AddIcon className="add-icon" />
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Wash the Dishes</p>
            </div>
            <div className="kanban-card">
              <MoreHorizIcon className="more-icon" />
              <p>Participating in Event</p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
  );
 };
 
 export default Dashboard;
 