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

router.get('/users', async (req, res) => {
    try {
      const users = await User.find();  // Fetch all users from the database
      res.status(200).json(users);       // Return the list of users as JSON
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }); 

  // Read user by ID route (GET /api/users/:id)
router.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id); // Find user by ID
      if (!user) {
        return res.status(404).json({ error: 'User not found' }); // If user not found
      }
      res.status(200).json(user); // Return the user object
    } catch (error) {
      res.status(500).json({ error: 'Invalid user ID' }); // Handle invalid IDs or DB errors
    }
  });
  
export default router;