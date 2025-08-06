import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    projectID:{type:String,required:true},
    title:{type:String,required:true},
    endDate:{type:String,required:true},
    media:{type:String,required:false},
    requirement:{type:String,required:true},
})


export default mongoose.models.Task || mongoose.model('Task', TaskSchema)