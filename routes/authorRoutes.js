import express from 'express';
import mongoose from 'mongoose';
import Author from '../models/author.js';

const router = express.Router();

// Get all authors
router.get('/', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Get a single author by ID
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).send({ message: 'Author not found' });
    }
    res.json(author);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Add a new author
router.post('/', async (req, res) => {
  try {
    console.log(req.body);  
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.json(newAuthor);
  } catch (err) {
    console.error('Error adding author:', err);
    res.status(400).send({ message: 'Bad Request' });
  }
});


// Update an author
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAuthor) {
      return res.status(404).send({ message: 'Author not found' });
    }
    res.json(updatedAuthor);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Delete an author
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).send({ message: 'Author not found' });
    }
    res.json({ message: 'Author deleted' });
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

export default router;
