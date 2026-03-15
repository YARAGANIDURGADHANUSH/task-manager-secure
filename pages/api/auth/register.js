import connectDB from "../../../lib/db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"

export default async function handler(req,res){

 if(req.method!=="POST"){
  return res.status(405).json({message:"method not allowed"})
 }

 await connectDB()

 const {email,password}=req.body

 const hashed = await bcrypt.hash(password,10)

 const user = await User.create({
  email,
  password:hashed
 })

 res.status(201).json({
  message:"user created"
 })

}