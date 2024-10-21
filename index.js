import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authorRoutes from './routes/authorRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// MongoDB connection
try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('MongoDB connected');
} catch (err) {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
}
app.use(express.json());
app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 