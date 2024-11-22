import express from 'express';
const router = express.Router();

// Create User Route
router.post('/users', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    // Validate input
    if (!name || !email || !age) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create and save the user
    const newUser = new User({ name, email, age });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;