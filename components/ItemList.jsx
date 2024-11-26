//form to read comments


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/items');
      setItems(response.data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch items');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <p>Loading items...</p>;

  const handleDelete = async (itemId) => {
    try {
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:3000/items/${itemId}`);
      console.log(response.data);  // Log the response to ensure it’s correct
      setItems(items.filter(item => item.id !== itemId)); // Remove item from local state
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h3>All Items</h3>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>: {item.description}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() => onEdit(item)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
