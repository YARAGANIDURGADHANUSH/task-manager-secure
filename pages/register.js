import { useState } from "react"

export default function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async () => {

    await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    alert("Registered Successfully")

  }

  return (

    <div className="container">

      <h2>Register</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={handleRegister}>
        Register
      </button>

    </div>

  )
}