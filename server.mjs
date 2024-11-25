// import all files into backend server
import express from 'express';
import connectdb from './config/db.mjs'
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/userRoutes.mjs';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import userSchema from './schema/newSchema.mjs'


//connect to mongodb
connectdb();

const app = express();
// dot env
dotenv.config();
//port
let PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// array to populate 
let items = [];

//CRUD i added it to my backend server bc i was having hard time importing i figured out why 

// CREATE
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

// READ 
app.get('/items', (req, res) => {
  res.status(200).json({
      message: 'Items fetched successfully!',
      items: items
  });
});


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

// UPDATE 
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

// DELETE //my delete doent work idk if im not utilizing it correctly

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
    res.json({ message: 'please work' });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));