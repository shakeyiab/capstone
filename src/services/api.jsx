import axios from "axios";

const API_URL = "http://localhost:5000/items";

// Fetch all items
export const getItems = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Create a new item
export const createItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};

// Update an item
export const updateItem = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// Delete an item
export const deleteItem = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

