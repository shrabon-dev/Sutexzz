// ~/server/api/[modelName]/index.js
// This file will handle operations on the *collection* of resources (e.g., GET all, POST to create)

import connectDB from "~/server/middleware/mongo";
import Project from "~/server/models/Project";
import User from "~/server/models/User"; // Assuming you have a User model at ~/server/models/User.js

export default defineEventHandler(async (event) => {
  // Ensure the database connection is established
  await connectDB();

  // Extract the modelName from the route parameters
  const { modelName } = event.context.params;

  // Map modelName strings to actual Mongoose model objects
  // Ensure 'User' is correctly imported and available if it's expected
  const models = { User, Project };
  const model = models[modelName];

  // If the modelName does not correspond to a valid model, return an error
 

  // Get the HTTP request method
  const reqMethod = event.req.method;

  // --- Handle POST request (for creating a new resource) ---
  if (reqMethod === 'POST') {
    try {
      // Read the request body, which should contain the data for the new resource
      const body = await readBody(event);
      // Create a new document in the database using the selected Mongoose model
      const created = await Project.create(body);
      // Return the created document
      return created;
    } catch (error) {
      console.error(`Error creating ${modelName}:`, error);
      // Return an error response if creation fails
      return {
        statusCode: 500,
        body: { error: `Failed to create ${modelName}.`, detail: error.message },
      };
    }
  }

  // --- Handle GET request (for fetching all resources in the collection) ---
  if (reqMethod === 'GET') {
    try {
      // Find all documents for the specified model
      const data = await model.find();
      // Return the fetched data
      return data;
    } catch (error) {
      console.error(`Error fetching all ${modelName}s:`, error);
      // Return an error response if fetching fails
      return {
        statusCode: 500,
        body: { error: `Failed to fetch all ${modelName}s.`, detail: error.message },
      };
    }
  }

  // If the request method is not supported by this endpoint
  return {
    statusCode: 405, // Method Not Allowed
    body: { error: `Method ${reqMethod} not allowed for collection operations.` },
  };
});
 