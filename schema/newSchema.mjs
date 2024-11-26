//schema

import mongoose from 'mongoose';
import express from 'express'


const app = express();
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    
  });
  
  default export userSchema;