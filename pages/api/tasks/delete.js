import connectDB from "../../../lib/db"
import Task from "../../../models/Task"

export default async function handler(req,res){

 await connectDB()

 const {id}=req.body

 await Task.findByIdAndDelete(id)

 res.json({message:"deleted"})

}