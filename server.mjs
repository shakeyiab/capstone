
import express from 'express';
import connectdb from './config/db.mjs'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import Item from './models/item.mjs';





connectdb();

const app = express();
dotenv.config();
let PORT = process.env.PORT || 3000;


//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

 
app.get('/', (req, res) => res.send('API is running'));

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Node.js!' });
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));