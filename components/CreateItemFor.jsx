import React, { useState } from 'react';
import axios from 'axios';

const CreateItemForm = ({ refreshItems }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !description) {
      setMessage();
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/items', {
        name,
        description,
      });
      setMessage(response.data.message);
      setName('');
      setDescription('');
      refreshItems(); // Refresh the items list after a successful post
    } catch (error) {
      setMessage();
    }
  };

  return (
    <div>
      <h3>Leave A Comment</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateItemForm;
