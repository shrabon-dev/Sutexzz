import jwt from "jsonwebtoken";
import User from "@/server/models/User";
import connectDB from "@/server/middleware/mongo";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  try {
    await connectDB();
    const body = await readBody(event);
    const { email, password } = body;

    if (!email || !password) {
      return { error: "Email and password are required" };
    }

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw createError({ statusCode: 401, statusMessage: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, user: user };
  } catch (error) {
    console.error("Login error:", error);
    throw createError({ statusCode: 500, statusMessage: "Internal Server Error" });
  }
});
