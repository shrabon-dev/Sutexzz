// server/middleware/auth.js
import jwt from "jsonwebtoken";
import User from "~/server/models/User";
import connectDB from "./mongo";

export default defineEventHandler(async (event) => {
  await connectDB();
  const token = getHeader(event, "authorization")?.split(" ")[1];

  if (!token) {
    // throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('process.env.JWT_SECRET:' + process.env.JWT_SECRET)

    const user = await User.findById(decoded.userId).select("-password");
    // if (!user) throw createError({ statusCode: 401, message: "Invalid Token" });

    event.context.authUser = user;
  } catch (error) {
    // throw createError({ statusCode: 401, message: "Invalid Token" });
  }
});
