import connectDB from "../../../lib/db"
import Task from "../../../models/Task"
import {verifyToken} from "../../../lib/auth"

export default async function handler(req,res){

 await connectDB()

 const token = req.cookies.token

 const decoded = verifyToken(token)

 const {title,description,status}=req.body

 const task = await Task.create({

  userId:decoded.userId,
  title,
  description,
  status

 })

 res.json(task)

}