import db from "../../../lib/db"
import Task from "../../../models/Task"

export default async function handler(req,res){

  await db()

  const { search, status } = req.query

  let query = {}

  // search by title
  if(search && search !== ""){
    query.title = { $regex: search, $options: "i" }
  }

  // filter by status
  if(status && status !== ""){
    query.status = status
  }

  const tasks = await Task.find(query).sort({ _id:-1 })

  res.json(tasks)

}