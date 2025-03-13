import express from 'express';
import dotenv from 'dotenv';
import receipeRouter from './Routers/receipe-router.js';
import connectDB from './Database/config.js';

dotenv.config();
const app = express();
app.use(express.json());
const PORT=process.env.PORT;
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});







app.use('/api',receipeRouter)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});