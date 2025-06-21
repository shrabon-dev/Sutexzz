import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Optional fields with default values
    fullName: { type: String, default: "" },
    dateOfBirth: { type: String, default: "" },
    gender: { type: String, default: "" },
    nationality: { type: String, default: "" },
    maritalStatus: { type: String, default: "" },
    address: { type: String, default: "" },
    cityPostalCode: { type: String, default: "" },
    occupation: { type: String, default: "" },
    organization: { type: String, default: "" }, 
  },
  { timestamps: true }
);


export default mongoose.models.User || mongoose.model("User", UserSchema);
 