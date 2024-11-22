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
  router.delete('/users/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);  // Delete the user by ID
      if (!user) {
        return res.status(404).json({ error: 'User not found' });  // If no user found, return 404
      }
      res.status(200).json({ message: 'User deleted successfully' });  // Return success message
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user' });  // Handle any errors
    }
  });
  // Update user by ID (PUT /api/users/:id)
router.put('/users/:id', async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        { name, email, age }, 
        { new: true }  // Return the updated user
      );
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);  // Return the updated user
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  });
  
  
export default router;