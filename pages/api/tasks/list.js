import dbConnect from "../../../lib/dbConnect"
import Task from "../../../models/Task"

export default async function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {

    await dbConnect()

    const { search = "", status = "", page = 1 } = req.query

    const limit = 5
    const skip = (page - 1) * limit

    let query = {}

    if (search) {
      query.title = { $regex: search, $options: "i" }
    }

    if (status && status !== "") {
      query.status = status
    }

    const tasks = await Task.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)

    const total = await Task.countDocuments(query)

    res.status(200).json({
      tasks,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    })

  } catch (error) {

    console.error(error)

    res.status(500).json({
      message: "Server error"
    })

  }

}