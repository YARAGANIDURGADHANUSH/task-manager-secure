export default function Home() {

  return(

    <div className="container">

      <h1>Task Manager Secure</h1>

      <p>Please login or create an account.</p>

      <a href="/login">
        <button>Login</button>
      </a>

      <br/><br/>

      <a href="/register">
        <button>Register</button>
      </a>

    </div>

  )

}