
import React, { useState, useEffect } from "react";

import axios from "axios";

function Worldnews()  {
  
    // State to store form data
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create item object
    const newItem = {
      name,
      description,
      price: parseFloat(price),
    };

    try {
      // Send POST request to backend to add the item
      const response = await axios.post('http://localhost:3000/add-item', newItem);

      // Handle successful response
      setMessage('Item added successfully');
      console.log(response.data); // You can handle the response as needed
    } catch (error) {
      // Handle error response
      setMessage('Error adding item');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
       
  export default Worldnews;