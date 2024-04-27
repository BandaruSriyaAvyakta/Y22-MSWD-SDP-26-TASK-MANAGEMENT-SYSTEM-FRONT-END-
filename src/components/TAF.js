import React, { useState } from 'react';
import ActionAreaCard from './ActionAreaCard'; // Ensure this component is correctly imported

const TAF = () => {
 const [items, setItems] = useState([
  { id: 1, name: 'Task 1', description: 'Gardening', deadline: '8-3-24', timeTaken: '2 Hours', status: 'To-do' },
  { id: 2, name: 'Task 2', description: 'Cleaning', deadline: '10-3-24', timeTaken: '1 Hour', status: 'Done' },
  { id: 3, name: 'Task 3', description: 'Cooking', deadline: '12-3-24', timeTaken: '3 Hours', status: 'Doing' },
  { id: 4, name: 'Task 4', description: 'Shopping', deadline: '14-3-24', timeTaken: '1 Hour', status: 'To-do' },
  { id: 5, name: 'Task 5', description: 'Cleaning', deadline: '16-3-24', timeTaken: '2 Hours', status: 'Done' },
  { id: 6, name: 'Task 6', description: 'Gardening', deadline: '18-3-24', timeTaken: '1 Hour', status: 'Doing' },
  { id: 7, name: 'Task 7', description: 'Cooking', deadline: '20-3-24', timeTaken: '2 Hours', status: 'To-do' },
  { id: 8, name: 'Task 8', description: 'Shopping', deadline: '22-3-24', timeTaken: '3 Hours', status: 'Done' },
  { id: 9, name: 'Task 9', description: 'Cleaning', deadline: '24-3-24', timeTaken: '1 Hour', status: 'Doing' },
  { id: 10, name: 'Task 10', description: 'Gardening', deadline: '26-3-24', timeTaken: '2 Hours', status: 'To-do' },
 ]);

 const [selectedCategory, setSelectedCategory] = useState('');

 const filterItemsByCategory = (type) => {
    setSelectedCategory(type);
 };

 const clearFilter = () => {
    setSelectedCategory('');
 };

 const generateShadesOfBlue = (index) => {
    const baseColor = [2, 136, 209]; // RGB values of the base color (#0288d1)
    const step = 20; // Adjust the step based on how many shades you want
    const modifiedColor = baseColor.map((value) => Math.min(255, value + index * step));
    return `rgb(${modifiedColor.join(',')})`;
 };

 // Function to handle dismissing an item
 const handleDismiss = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
 };

 return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
    <h2 style={{ marginBottom: '180px' }}>Tasks</h2>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '20px' }}>
      <select
        style={{ fontSize: '16px', padding: '10px', margin: '0 10px' }}
        value={selectedCategory}
        onChange={(e) => filterItemsByCategory(e.target.value)}
      >
        <option value="">Select Status</option>
        <option value="To-do">To-do</option>
        <option value="Done">Done</option>
        <option value="Doing">Doing</option>
      </select>
      <button style={{ fontSize: '16px', padding: '10px', margin: '0 10px' }} onClick={clearFilter}>
        Clear
      </button>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {selectedCategory
        ? items
            .filter((item) => item.status === selectedCategory)
            .map((item, index) => (
              <ActionAreaCard
               key={item.id}
               data={{
                  name: item.name,
                  details: `Description: ${item.description} | Deadline: ${item.deadline} | Time Taken: ${item.timeTaken} | Status: ${item.status}`,
               }}
               cardColor={generateShadesOfBlue(index)}
               onDismiss={() => handleDismiss(item.id)}
               showDismissButton={false} // Hide the dismiss button for TAF
              />
            ))
        : items.map((item, index) => (
            <ActionAreaCard
              key={item.id}
              data={{
               name: item.name,
               details: `Description: ${item.description} | Deadline: ${item.deadline} | Time Taken: ${item.timeTaken} | Status: ${item.status}`,
              }}
              cardColor={generateShadesOfBlue(index)}
              onDismiss={() => handleDismiss(item.id)}
              showDismissButton={false} // Hide the dismiss button for TAF
            />
          ))}
    </div>
  </div>
);
};

export default TAF;