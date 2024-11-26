import React, { useState } from 'react';
import axios from 'axios';

// form for creating comments
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
      <h3>Whats On Your Mind</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Insert Comment"
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
