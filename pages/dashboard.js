import { useState, useEffect } from "react"

export default function Dashboard(){

const [title,setTitle] = useState("")
const [description,setDescription] = useState("")
const [status,setStatus] = useState("pending")

const [tasks,setTasks] = useState([])

const [search,setSearch] = useState("")
const [filter,setFilter] = useState("")

const [page,setPage] = useState(1)
const [totalPages,setTotalPages] = useState(1)


// LOAD TASKS
const loadTasks = async()=>{

const res = await fetch(`/api/tasks/list?search=${search}&status=${filter}&page=${page}`)

const data = await res.json()

setTasks(data.tasks)
setTotalPages(data.pages)

}


// AUTO LOAD
useEffect(()=>{

loadTasks()

},[search,filter,page])


// CREATE TASK
const createTask = async()=>{

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


// DELETE TASK
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

<div style={{
maxWidth:"700px",
margin:"auto",
padding:"40px",
background:"#fff",
borderRadius:"10px"
}}>

<h1>Task Dashboard</h1>

<h3>Create Task</h3>

<input
placeholder="Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<br/><br/>

<input
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<br/><br/>

<select
value={status}
onChange={(e)=>setStatus(e.target.value)}
>

<option value="pending">Pending</option>
<option value="completed">Completed</option>

</select>

<br/><br/>

<button onClick={createTask}>
Create Task
</button>


<hr/>


<h3>Search Tasks</h3>

<input
placeholder="Search title"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<br/><br/>

<select
value={filter}
onChange={(e)=>setFilter(e.target.value)}
>

<option value="">All</option>
<option value="pending">Pending</option>
<option value="completed">Completed</option>

</select>


<hr/>


<h2>Tasks</h2>

{tasks.map((task)=>(

<div
key={task._id}
style={{
border:"1px solid #ddd",
padding:"15px",
marginBottom:"10px",
borderRadius:"8px"
}}
>

<h3>{task.title}</h3>

<p>{task.description}</p>

<p>Status: {task.status}</p>

<button
onClick={()=>deleteTask(task._id)}
>
Delete
</button>

</div>

))}



{/* PAGINATION */}

<div style={{
marginTop:"20px",
display:"flex",
gap:"15px",
alignItems:"center"
}}>

<button
disabled={page===1}
onClick={()=>setPage(page-1)}
>
Previous
</button>

<span>
Page {page} of {totalPages}
</span>

<button
disabled={page===totalPages}
onClick={()=>setPage(page+1)}
>
Next
</button>

</div>


</div>

)

}