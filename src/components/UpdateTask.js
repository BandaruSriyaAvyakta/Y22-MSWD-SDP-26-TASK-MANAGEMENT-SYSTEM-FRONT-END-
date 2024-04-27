// UpdateTask.jsx
import React from 'react';
import { Button } from '@mui/material';

const UpdateTask = ({ updateForm = {}, setUpdateForm, handleUpdateSubmit }) => {
  // Ensure that the form is only displayed if an ID is present
  if (!updateForm._id) {
    return null;
  }

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateForm((prevState) => ({ ...prevState, [name]: value }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateSubmit(); // You can directly call the handleUpdateSubmit function from the props
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow:
          '0px  2px  1px -1px rgba(0,  0,  0,  0.2),  0px  4px  2px rgba(0,  0,  0,  0.14),  0px  8px  3px rgba(0,  0,  0,  0.12)',
      }}
    >
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={updateForm.title || ''} onChange={handleInputChange} />
        </label>
        <br />
        {/* Add other input fields here */}
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default UpdateTask;