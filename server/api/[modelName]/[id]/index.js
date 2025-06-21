import connectDB from "~/server/middleware/mongo"

export default defineEventHandler(async (event)=>{
    await connectDB()

    const {modelName, id} = event.context.params;
    const models = {User}
    const model = models[modelName]

    const req = event.req.method

    if(req == 'GET'){
        try{
            const data = model.findById(id);
            return data;
        }catch(error){
            return error;
        }
    }
    if (event.req.method === 'PUT') {
        const body = await readBody(event);
        const updated = await model.findByIdAndUpdate(id, body, { new: true });
        return body;
    }
})