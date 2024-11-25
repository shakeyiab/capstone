import express from 'express';
import connectdb from './config/db.mjs'
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs';
import dotenv from 'dotenv';
import bodyParser from "body-parser";


connectdb();

const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


let items = [];


// CREATE - Add new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
  }

  const newItem = { id: items.length + 1, name, description };
  items.push(newItem);

  res.status(201).json({
      message: 'Item created successfully!',
      item: newItem
  });
});

// READ - Get all items
app.get('/items', (req, res) => {
  res.status(200).json({
      message: 'Items fetched successfully!',
      items: items
  });
});

// READ - Get a single item by ID
app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);

  if (!item) {
      return res.status(404).json({ message: 'Item not found' });
  }

  res.status(200).json({
      message: 'Item fetched successfully!',
      item: item
  });
});

// UPDATE - Update an item by ID
app.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name, description } = req.body;

  const itemIndex = items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found' });
  }

  if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
  }

  items[itemIndex] = { id: itemId, name, description };
  
  res.status(200).json({
      message: 'Item updated successfully!',
      item: items[itemIndex]
  });
});

// DELETE - Delete an item by ID
// DELETE - Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  const itemIndex = items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found' });
  }

  items.splice(itemIndex, 1);  // Remove the item from the array

  res.status(200).json({
      message: 'Item deleted successfully!'
  });
});


app.get('/', (req, res) => res.send('API is running'));

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));