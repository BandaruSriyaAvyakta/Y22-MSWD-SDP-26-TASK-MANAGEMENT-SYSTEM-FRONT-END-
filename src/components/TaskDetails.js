import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const TaskDetails = ({ taskDetails }) => {
 return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', backgroundColor: '#EF7C8E' }}>
      <Typography variant="h5" gutterBottom>
        Task Details
      </Typography>
      <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #000000' }}>
        <tbody>
          {Object.entries(taskDetails).map(([key, value]) => (
            <tr key={key} style={{ borderBottom: '1px solid #000000' }}>
              <td style={{ padding: '10px', textAlign: 'left', borderRight: '1px solid #000000' }}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</strong>
              </td>
              <td style={{ padding: '10px', textAlign: 'left' }}>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
 );
};

export default TaskDetails;
