import connectDB from "~/server/middleware/mongo";
import Project from "~/server/models/Project";
import User from "~/server/models/User";  
import { readBody } from 'h3';  
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
  await connectDB();

  const { modelName, id } = event.context.params;
  const models = { User, Project };
  const model = models[modelName];

  const req = event.req.method;

    if (!model) {
        return { error: `Model '${modelName}' not found` };
    }
    

    if (req === 'DELETE') {
    try {
        const deleted = await model.findByIdAndDelete(id);
        if (!deleted) {
        return { error: "Not found" };
        }
        return { success: true, message: "Deleted successfully" };
    } catch (error) {
        return { error: "DELETE failed", detail: error.message };
    }
    }
    if (req === 'GET') {
      try {
        const authId = id;
        if (!authId) return { error: 'Unauthorized' };

        const data = await Project.find({ freelancerId: new mongoose.Types.ObjectId(authId) });
        return { data };
      } catch (error) {
        return { error: "GET failed", detail: error.message };
      }
    }

  return {
    error: "Invalid request method",
    method: req,
  };
});
