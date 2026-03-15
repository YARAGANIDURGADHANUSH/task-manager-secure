import connectDB from "../../../lib/db"
import Task from "../../../models/Task"
import {verifyToken} from "../../../lib/auth"

export default async function handler(req,res){

 await connectDB()

 const token = req.cookies.token

 const decoded = verifyToken(token)

 const page = Number(req.query.page)||1

 const search = req.query.search || ""

 const status = req.query.status

 let query={
  userId:decoded.userId,
  title:{$regex:search,$options:"i"}
 }

 if(status){
  query.status=status
 }

 const tasks = await Task.find(query)
  .skip((page-1)*10)
  .limit(10)

 res.json(tasks)

}