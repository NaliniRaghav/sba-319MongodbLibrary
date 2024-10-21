import express from 'express';
import mongoose from 'mongoose';
import User from '../models/user.js';

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().populate('borrowedBooks');
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).send({ message: 'Server Error' });
  }
});

// Get a single user by ID
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const user = await User.findById(req.params.id).populate('borrowedBooks');
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).send({ message: 'Server Error' });
  }
});

// Add a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(400).send({ message: 'Bad Request' });
  }
});

// Update a user
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).send({ message: 'Server Error' });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).send({ message: 'Server Error' });
  }
});

export default router;
