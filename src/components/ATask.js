import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, InputLabel, Input, FormHelperText, Button, CardContent, Typography } from '@mui/material';

const ATask = ({ email }) => { // Accept email as a prop
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [status, setStatus] = useState('To-do');
 const [dueDate, setDueDate] = useState('');
 const [timeTaken, setTimeTaken] = useState('');
 const [deadlineTime, setDeadlineTime] = useState('');
 const [error, setError] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();

    const completeDeadline = `${dueDate}T${deadlineTime}`;
    const deadline = new Date(completeDeadline);
    deadline.setMinutes(deadline.getMinutes() - 5);

    const data = {
      title,
      description,
      status,
      dueDate: completeDeadline,
      timeTaken,
      deadline: deadline.toISOString(),
      email, // Include the email obtained from props
    };

    console.log(data);

    try {
      const response = await axios.post('http://localhost:5000/tasks', data);
      console.log(response.data);
      setTitle('');
      setDescription('');
      setStatus('To-do');
      setDueDate('');
      setTimeTaken('');
      setDeadlineTime('');
      setError('');
    } catch (err) {
      console.log("Error in posting data: " + err.message);
      setError("Error occurred while adding the task");
    }
 };

 return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 0px)', backgroundColor: '#93F8F6', padding: '0px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)', marginTop: '200px' }}>
      <CardContent style={{ padding: 59, width: '400px', height: '400px', borderRadius: '0px' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'darkblue', fontWeight: 'bold', textAlign: 'center', marginTop: '0px' }}>
          ADD TASK
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="title" sx={{ color: 'darkblue' }}>Title</InputLabel>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="description" sx={{ color: 'darkblue' }}>Description</InputLabel>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="status" sx={{ color: 'darkblue' }}>Status</InputLabel>
            <Input
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="dueDate" sx={{ color: 'darkblue' }}>Due Date</InputLabel>
            <Input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="deadlineTime" sx={{ color: 'darkblue' }}>Deadline Time</InputLabel>
            <Input
              id="deadlineTime"
              type="time"
              value={deadlineTime}
              onChange={(e) => setDeadlineTime(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <FormControl style={{ width: '100%' }}>
            <InputLabel htmlFor="timeTaken" sx={{ color: 'darkblue' }}>Time Taken (hours)</InputLabel>
            <Input
              id="timeTaken"
              type="number"
              value={timeTaken}
              onChange={(e) => setTimeTaken(e.target.value)}
              required
              sx={{ color: 'darkblue' }}
            />
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 2 }}>
            Add Task
          </Button>
          {error && (
            <FormHelperText error style={{ marginTop: 2 }}>
              {error}
            </FormHelperText>
          )}
        </form>
      </CardContent>
    </div>
 );
};

export default ATask;
