import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';

const UpdateTaskForm = ({ initialTaskData, onSubmit }) => {
 const [taskData, setTaskData] = useState(initialTaskData || {});

 useEffect(() => {
    setTaskData(initialTaskData);
 }, [initialTaskData]);

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevState) => ({ ...prevState, [name]: value }));
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData);
 };

 return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField label="Title" name="title" value={taskData.title || ''} onChange={handleInputChange} required style={{ marginBottom: 16 }} />
      <TextField label="Description" name="description" value={taskData.description || ''} onChange={handleInputChange} required style={{ marginBottom: 16 }} />
      <TextField label="Status" name="status" value={taskData.status || ''} onChange={handleInputChange} required style={{ marginBottom: 16 }} />
      <TextField label="Due Date" type="date" name="dueDate" value={taskData.dueDate ? new Date(taskData.dueDate).toISOString().split('T')[0] : ''} onChange={handleInputChange} required style={{ marginBottom: 16 }} InputLabelProps={{ shrink: true }} />
      <TextField label="Time Taken" name="timeTaken" value={taskData.timeTaken || ''} onChange={handleInputChange} required style={{ marginBottom: 16 }} />
      <Button type="submit" variant="contained" color="primary">
        Update
      </Button>
    </form>
 );
};

export default UpdateTaskForm;
