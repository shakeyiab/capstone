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

  return (
    <div>
      <h3>All Comments</h3>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong>: {item.description}
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
