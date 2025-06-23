import connectDB from "~/server/middleware/mongo"
import Project from "~/server/models/Project";

export default defineEventHandler(async (event)=>{
    await connectDB()

    const {modelName, id} = event.context.params;
    const models = {User,Project}
    const model = models[modelName]

    const req = event.req.method

    if(req == 'GET'){
        try{
            const data = model.get();
            return data;
        }catch(error){
            return error;
        }
    }
    if (req === 'PUT') {
        const body = await readBody(event);
        const updated = await model.findByIdAndUpdate(id, body, { new: true });
        return body;
    }
    if(req === 'POST'){
        try{
            const body = await readBody(event);
            const created = await model.create(body)
            return created;
        }catch(error){
                return { error: "POST failed", detail: error.message };
        }
    }
     // If no method matched
  return {
    error: "Invalid request",
    method,
  };
})