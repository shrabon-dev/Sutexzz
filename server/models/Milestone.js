import mongoose from "mongoose";

const MilestoneSchema = new mongoose.Schema({
    projectID:{type:Object,required:true},
    title:{type:String,required:true},
    releaseDate:{type:String,required:true},
    budget:{type:String,required:false},
    whoIssue:{type:String,required:true},
    whoGet:{type:String,required:true},
    status:{type:String,required:true},
})


export default mongoose.models.Milestone || mongoose.model('Milestone', MilestoneSchema)