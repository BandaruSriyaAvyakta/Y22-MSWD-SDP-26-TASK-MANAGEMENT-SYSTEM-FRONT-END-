import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ActionAreaCard from './ActionAreaCard';

const Users = ({ initialUsers }) => {
 // State to manage the list of users
 const [users, setUsers] = useState(initialUsers);

 // Function to handle dismissing a user
 const handleDismiss = (userId) => {
    // Filter out the dismissed user
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers); // Update the state with the filtered list
 };

 return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '130px' }}>
    <Typography variant="h4" gutterBottom style={{ color: 'darkblue', fontWeight: 'bold' }}>
      Users
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
      {users.map(user => (
        <ActionAreaCard
          key={user.id}
          data={{
            name: user.name,
            details: `Phone: ${user.phno} | TaskTime: ${user.TaskTime} | Task: ${user.Task} `,
          }}
          onDismiss={() => handleDismiss(user.id)}
          showDismissButton={true} // Show the dismiss button for Users
        />
      ))}
    </div>
  </div>
);
};

export default Users;