
import express from 'express';
import connectdb from './config/db.mjs'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";






connectdb();
; 
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

// Define the Item schema
const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  });
  
  // Create a model based on the schema
  const Item = mongoose.model('Item', itemSchema);
  
  // GET route to fetch all items from MongoDB
// GET route to fetch all items from MongoDB
app.get('/items', async (req, res) => {
    try {
      // Fetch all items from the "items" collection
      const items = await Item.find();  // Mongoose automatically uses the 'items' collection
      res.status(200).json(items);  // Send the data as a JSON response
    } catch (err) {
      res.status(500).json({ message: 'Error fetching items', error: err });
    }
  });
  

 
app.get('/', (req, res) => res.send('API is running'));

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));