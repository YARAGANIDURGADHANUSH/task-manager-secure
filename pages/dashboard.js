import { useState, useEffect } from "react"

export default function Dashboard(){

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [status,setStatus] = useState("pending")

  const [tasks,setTasks] = useState([])

  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("")

  // Load tasks from API
  const loadTasks = async ()=>{

    const res = await fetch(`/api/tasks/list?search=${search}&status=${filter}`)

    const data = await res.json()

    setTasks(data)

  }

  // Load tasks when page opens
  useEffect(()=>{
    loadTasks()
  },[])

  // Create new task
  const createTask = async ()=>{

    await fetch("/api/tasks/create",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({
        title,
        description,
        status
      })

    })

    setTitle("")
    setDescription("")

    loadTasks()

  }

  // Delete task
  const deleteTask = async(id)=>{

    await fetch("/api/tasks/delete",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({id})

    })

    loadTasks()

  }

  return(

    <div className="container">

      <h1>Task Dashboard</h1>

      {/* Create Task Section */}

      <h3>Create Task</h3>

      <input
      placeholder="Title"
      value={title}
      onChange={e=>setTitle(e.target.value)}
      />

      <input
      placeholder="Description"
      value={description}
      onChange={e=>setDescription(e.target.value)}
      />

      <select
      value={status}
      onChange={e=>setStatus(e.target.value)}
      >

        <option value="pending">Pending</option>
        <option value="completed">Completed</option>

      </select>

      <button onClick={createTask}>
        Create Task
      </button>

      <hr/>

      {/* Search Tasks Section */}

      <h3>Search Tasks</h3>

      <input
      placeholder="Search title"
      value={search}
      onChange={e=>setSearch(e.target.value)}
      />

      <select
      value={filter}
      onChange={e=>setFilter(e.target.value)}
      >

        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>

      </select>

      <button onClick={loadTasks}>
        Search Tasks
      </button>

      <hr/>

      {/* Tasks List */}

      <h2>Tasks</h2>

      {tasks.map(task=>(

        <div className="task" key={task._id}>

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>Status: {task.status}</p>

          <button onClick={()=>deleteTask(task._id)}>
            Delete
          </button>

        </div>

      ))}

    </div>

  )

}