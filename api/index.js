import express from 'express';  
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import router from user.routes.js
import router from './routes/user.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then (() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//create test api endpoint
app.use('/api/user', router);