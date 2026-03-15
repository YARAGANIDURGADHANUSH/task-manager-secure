import connectDB from "../../../lib/db"
import User from "../../../models/User"
import bcrypt from "bcryptjs"
import {generateToken} from "../../../lib/auth"

export default async function handler(req,res){

 await connectDB()

 const {email,password}=req.body

 const user = await User.findOne({email})

 if(!user){
  return res.status(401).json({message:"invalid"})
 }

 const match = await bcrypt.compare(password,user.password)

 if(!match){
  return res.status(401).json({message:"invalid"})
 }

 const token = generateToken(user._id)

 res.setHeader(
 "Set-Cookie",
 `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict`
 )

 res.json({message:"login success"})
}