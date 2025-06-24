 

import connectDB from "~/server/middleware/mongo";
import Project from "~/server/models/Project";
import User from "~/server/models/User";  

export default defineEventHandler(async (event) => {
  await connectDB();

  const { modelName } = event.context.params;
  const models = { User, Project };
  const model = models[modelName];
  const reqMethod = event.req.method;

  if (reqMethod === 'POST') {
    try {
      const body = await readBody(event);
      const created = await Project.create(body);
      return created;
    } catch (error) {
      console.error(`Error creating ${modelName}:`, error);
      return {
        statusCode: 500,
        body: { error: `Failed to create ${modelName}.`, detail: error.message },
      };
    }
  }

  if (reqMethod === 'GET') {
    try {
      const data = await model.find();
      return data;
    } catch (error) {
      console.error(`Error fetching all ${modelName}s:`, error);
      return {
        statusCode: 500,
        body: { error: `Failed to fetch all ${modelName}s.`, detail: error.message },
      };
    }
  }

  return {
    statusCode: 405, 
    body: { error: `Method ${reqMethod} not allowed for collection operations.` },
  };
});
 