import User from "@/server/models/User";
import connectDB from "@/server/middleware/mongo";
import bcrypt from "bcryptjs";

export default defineEventHandler(async (event) => {
  function formatUsername(name) {
  return '@' + name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // removes all non-alphanumeric characters
}
  try {
    await connectDB();

    const body = await readBody(event);
    const {
      username,
      phone,
      email,
      password,
      fullName,
      dateOfBirth,
      gender,
      nationality,
      maritalStatus,
      address,
      cityPostalCode,
      occupation,
      organization,
    } = body;
    const cleanUsername = formatUsername(fullName);
    if (!fullName || !email || !password || !phone) {
      return { status: 400, error: "All required fields must be filled." };
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { status: 400, error: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: cleanUsername || "",
      phone,
      email,
      password: hashedPassword,
      fullName: fullName || "",
      dateOfBirth: dateOfBirth || "",
      gender: gender || "",
      nationality: nationality || "",
      maritalStatus: maritalStatus || "",
      address: address || "",
      cityPostalCode: cityPostalCode || "",
      occupation: occupation || "",
      organization: organization || "",
    });

    await newUser.save();

    return {
      status: 201,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        phone: newUser.phone,
        email: newUser.email
      }
    };
  } catch (error) {
    console.error("Register API error:", error);
    return { status: 500, error: "Internal Server Error" };
  }
});
