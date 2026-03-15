import {useState} from "react"

export default function Register(){

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 const submit=async()=>{

  await fetch("/api/auth/register",{

   method:"POST",
   headers:{"Content-Type":"application/json"},

   body:JSON.stringify({email,password})

  })

 }

 return(

  <div>

  <h2>Register</h2>

  <input
  placeholder="email"
  onChange={e=>setEmail(e.target.value)}
  />

  <input
  placeholder="password"
  onChange={e=>setPassword(e.target.value)}
  />

  <button onClick={submit}>
  register
  </button>

  </div>

 )

}