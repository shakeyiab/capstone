import React, { useState, useEffect } from 'react';
import axios from 'axios';


// form for editing/ updating comments


const EditItemForm = ({ itemId, onItemUpdated, closeForm }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items/${itemId}`);
        setName(response.data.item.name);
        setDescription(response.data.item.description);
      } catch (error) {
        setMessage('Failed to fetch item');
      }
    };

    if (itemId) {
      fetchItem();
    }
  }, [itemId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setMessage('Name and description are required');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3000/items/${itemId}`, {
        name,
        description,
      });
      setMessage(response.data.message);
      onItemUpdated(); // Refresh the items list after a successful update
      closeForm(); // Close the edit form
    } catch (error) {
      setMessage();
    }
  };

  return (
    <div>
      <h3>Edit Comment</h3>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder=" Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Comment"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Comment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditItemForm;
