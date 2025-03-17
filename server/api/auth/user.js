import jwt from "jsonwebtoken";
import User from "../../models/User";
import connectDB from "../../middleware/mongo.js";

export default defineEventHandler(async (event) => {
  await connectDB();
  const token = getHeader(event, "authorization")?.split(" ")[1];

  if (!token) {
    return { error: "Unauthorized" };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    return { user };
  } catch (error) {
    return { error: "Invalid token" };
  }
});
