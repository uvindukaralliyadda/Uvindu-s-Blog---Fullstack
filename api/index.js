import express from 'express';  
import mongoose from 'mongoose';
import dotenv from 'dotenv';

//import router from user.routes.js
import router from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then (() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

//create express app
const app = express();

//post request  using insomnia for auth.route.js
app.use(express.json());

//middleware to parse json in express
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//create test api endpoint
app.use('/api/user', router);
app.use('/api/auth', authRouter);

//error handling middleware
app.use((err,req,res,next) => {
  const statusCode=err.statusCode || 500;
const message=err.message || 'Internal Server Error';
res.status(statusCode).json({ 
  success: false,
  statusCode,
  message,
 });
});