import express from 'express';
import mongoose from 'mongoose';
import Book from '../models/book.js';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.json(books);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Get a single book by ID
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const book = await Book.findById(req.params.id).populate('author');
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Add a new book
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
  } catch (err) {
    res.status(400).send({ message: 'Bad Request' });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send({ message: 'Invalid ID' });
    }
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).send({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).send({ message: 'Server Error' });
  }
});

export default router;
