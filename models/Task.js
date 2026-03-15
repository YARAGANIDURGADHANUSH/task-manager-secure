import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({

 userId:String,

 title:String,

 description:String,

 status:String,

 createdAt:{
  type:Date,
  default:Date.now
 }

})

export default mongoose.models.Task ||
 mongoose.model("Task",TaskSchema)