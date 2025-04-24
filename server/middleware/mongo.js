import mongoose from "mongoose";

export default async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw new Error("Database connection failed");
  }
}
 
