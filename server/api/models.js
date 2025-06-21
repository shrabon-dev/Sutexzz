import mongoose from 'mongoose'
import connectDB from '../middleware/mongo';

export default defineEventHandler(async () => {
  await connectDB(); // make sure DB is connected

  return Object.keys(mongoose.models); // safe to access now
});