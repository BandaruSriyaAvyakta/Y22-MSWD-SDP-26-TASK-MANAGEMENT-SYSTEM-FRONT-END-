import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateTaskForm from './UpdateTaskForm'; // Ensure this import path is correct

const DisplayTask = () => {
 const [tasks, setTasks] = useState([]);
 const [updateForm, setUpdateForm] = useState({});

 useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
 }, []);

 const handleUpdateClick = (id) => {
    axios.get(`http://localhost:5000/tasks/${id}`)
      .then(response => {
        setUpdateForm(response.data);
      })
      .catch(error => {
        console.error('Error fetching task details for update:', error);
      });
 };

 const handleUpdateSubmit = (updatedTaskData) => {
    axios.put(`http://localhost:5000/tasks/${updatedTaskData._id}`, updatedTaskData)
      .then(response => {
        toast.success('Task updated successfully!', { position: 'top-left' });
        refreshData();
        setUpdateForm({}); // Clear the update form
      })
      .catch(error => {
        console.error('Error updating task:', error);
        toast.error('Failed to update task. Please try again.', { position: 'top-left' });
      });
 };

 const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(response => {
        toast.success('Task deleted successfully!', { position: 'top-left' });
        refreshData();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
        toast.error('Failed to delete task. Please try again.', { position: 'top-left' });
      });
 };

 const refreshData = () => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
 };

 return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {tasks.map((task, index) => (
        <Card key={index} style={{ minWidth: 275, margin: '10px', backgroundColor: '#FFEAA7' }}>
          <CardContent>
            <p>Task: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Deadline: {new Date(task.dueDate).toLocaleDateString()} {new Date(task.dueDate).toLocaleTimeString()}</p>
            <p>Status: {task.status}</p>
            <p>Time Taken: {task.timeTaken} hours</p>
            <Button onClick={() => handleUpdateClick(task._id)}>Update</Button>
            <Button onClick={() => handleDelete(task._id)}>Delete</Button>
          </CardContent>
        </Card>
      ))}
      {updateForm._id && (
        <UpdateTaskForm
          initialTaskData={updateForm}
          onSubmit={handleUpdateSubmit}
        />
      )}
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
 );
};

export default DisplayTask;
