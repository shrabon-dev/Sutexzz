import connectDB from "~/server/middleware/mongo";
import Project from "~/server/models/Project";
import User from "~/server/models/User"; // ✅ Add this
import { readBody } from 'h3'; // ✅ Add this
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

      if (req === 'PUT' || req === 'PATCH') {
        try {
          const projectId = event.context.params.id;
          const body = await readBody(event);
          console.log(`Received project update body for ID ${projectId}:`, body);

          if (!mongoose.Types.ObjectId.isValid(projectId)) {
            return { statusCode: 400, error: "Invalid Project ID." };
          }

          // Prepare update data, excluding fields that shouldn't be updated or are managed separately
          const updateData = { ...body };
          delete updateData._id; // Prevent updating the _id itself
          delete updateData.projectCode; // Project code usually shouldn't change
          delete updateData.createdAt; // Timestamp
          delete updateData.updatedAt; // Timestamp

          // Handle assignedTeam if it's sent as a comma-separated string from a single input
          // If your frontend sends it as an array already, this isn't strictly needed here.
          if (typeof updateData.assignedTeam === 'string') {
            updateData.assignedTeam = updateData.assignedTeam
              .split(',')
              .map(item => item.trim())
              .filter(item => item !== '');
          }

          const updatedProject = await Project.findByIdAndUpdate(
            projectId,
            { $set: updateData }, // Use $set to update specified fields
            { new: true, runValidators: true } // Return the updated document and run schema validators
          );

          if (!updatedProject) {
            return { statusCode: 404, error: "Project not found." };
          }

          return { statusCode: 200, data: updatedProject, message: "Project updated successfully!" };

        } catch (error) {
          console.error("Project update failed:", error);
          let detail = error.message;
          if (error.name === 'ValidationError') {
              detail = Object.keys(error.errors).map(key => error.errors[key].message).join(', ');
          } else if (error.name === 'CastError') {
              detail = `Invalid ID format for ${error.path}: ${error.value}`;
          }
          return { statusCode: 500, error: "Failed to update project.", detail: detail };
        }
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
        const data = await model.findById(id);
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
