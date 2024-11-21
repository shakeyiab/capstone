import axios from "axios";

const API_URL = "http://localhost:3000/api/items";

// Create a new item
export const createItem = async (item) => {
  const response = await axios.post(API_URL, item);
  return response.data;
};