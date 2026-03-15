import { useState } from "react"

export default function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const login = async () => {

    await fetch("/api/auth/login",{

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body:JSON.stringify({email,password})

    })

    alert("Login successful")

  }

  return(

    <div className="container">

      <h2>Login</h2>

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

      <button onClick={login}>
        Login
      </button>

    </div>

  )

}