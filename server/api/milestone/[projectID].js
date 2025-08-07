// server/api/task/[projectID].js

import mongoose from "mongoose";
import connectDB from "~/server/middleware/mongo";
import Milestone from "~/server/models/Milestone"; // ✅ You MUST import the Task model

export default defineEventHandler(async (event) => {
  await connectDB();

  const { projectID } = event.context.params;
  const reqMethod = event.req.method;
  if (reqMethod === 'GET') {
    try {
      const data = await Milestone.find({ projectID: projectID });
      return { data };
    } catch (error) {
      return sendError(event, createError({
        statusCode: 500,
        statusMessage: 'Error fetching tasks',
        data: error.message,
      }));
    }
  }

  return {
    message: 'Method Not Allowed',
  };
});
