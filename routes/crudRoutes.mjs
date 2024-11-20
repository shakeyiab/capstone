// CRUD Routes

import express from 'express';
import Item from '../models/item.mjs';

const router = express.Router();


// Create
app.post("/items", async (req, res) => {
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Read
  app.get("/items", async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  
  // Update
  app.put("/items/:id", async (req, res) => {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // Delete
  app.delete("/items/:id", async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  export default router;