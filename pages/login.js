import {useState} from "react"

export default function Login(){

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")

 const login=async()=>{

  await fetch("/api/auth/login",{

   method:"POST",

   headers:{
    "Content-Type":"application/json"
   },

   body:JSON.stringify({email,password})

  })

 }

 return(

  <div>

  <h2>Login</h2>

  <input
  placeholder="email"
  onChange={e=>setEmail(e.target.value)}
  />

  <input
  placeholder="password"
  onChange={e=>setPassword(e.target.value)}
  />

  <button onClick={login}>
  login
  </button>

  </div>

 )

}