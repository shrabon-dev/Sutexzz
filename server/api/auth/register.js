import User from "@/server/models/User";
import connectDB from "@/server/middleware/mongo";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  try {
    await connectDB();

    const body = await readBody(event);
    const { username, phone, email, password } = body;

    if (!username || !email || !password) {
      return { status: 400, error: "All fields are required" };
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return { status: 400, error: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, phone, email, password: hashedPassword });

    await newUser.save();

    return {
      status: 201,
      message: "User registered successfully",
      user: { id: newUser._id, username: newUser.username,phone: newUser.phone, email: newUser.email },
    };
  } catch (error) {
    console.error("Register API error:", error);
    return { status: 500, error: "Internal Server Error" };
  }
});
