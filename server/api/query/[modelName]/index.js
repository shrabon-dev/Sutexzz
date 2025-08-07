import connectDB from "~/server/middleware/mongo";
import Project from "~/server/models/Project";
import User from "~/server/models/User";  
import { readBody } from 'h3';  
import Task from "~/server/models/Task"; 
import Milestone from "~/server/models/Milestone"; 

export default defineEventHandler(async (event) => {
  await connectDB();

  const { modelName, id } = event.context.params;
  const models = { User, Project, Task, Milestone };
  const model = models[modelName];

  const req = event.req.method;

  if (!model) {
    return { error: `Model '${modelName}' not found` };
  }

    if (req === 'GET') {
      try {
        const freelanceID = event.context.auth?._id || event.context.authId
        const data = await  Project.find({freelanceID:freelanceID});  
        return data;
      } catch (error) {
        return { error: "GET failed", detail: error.message };
      }
    }

  if (req === 'DELETE') {
    try {
      const body = await readBody(event);
      const updated = await model.findByIdAndUpdate(id, body, { new: true });
      return updated;
    } catch (error) {
      return { error: "PUT failed", detail: error.message };
    }
  }

  if (req === 'PUT') {
    try {
      const body = await readBody(event);
      const updated = await model.findByIdAndUpdate(id, body, { new: true });
      return updated;
    } catch (error) {
      return { error: "PUT failed", detail: error.message };
    }
  }

  if (req === 'POST') {
    try {
      const body = await readBody(event);
      const created = await model.create(body);
      return created;
    } catch (error) {
      return { error: "POST failed", detail: error.message };
    }
  }

  return {
    error: "Invalid request method",
    method: req,
  };
});
