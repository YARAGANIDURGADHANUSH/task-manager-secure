import { useState } from "react"

export default function Register(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const register = async ()=>{

    const res = await fetch("/api/auth/register",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({email,password})

    })

    if(res.ok){
      alert("Registration successful")
      window.location.href="/login"
    }
    else{
      alert("Registration failed")
    }

  }

  return(

    <div className="container">

      <h2>Register</h2>

      <input
      placeholder="Email"
      value={email}
      onChange={e=>setEmail(e.target.value)}
      />

      <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={e=>setPassword(e.target.value)}
      />

      <button onClick={register}>
      Register
      </button>

    </div>

  )

}