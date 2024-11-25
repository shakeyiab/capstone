//schema

import mongoose from 'mongoose';
import express from 'express'


const app = express();
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  });
  
  default export userSchema;