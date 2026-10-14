import type React from "react"
import { useState } from "react"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e : React.SubmitEvent) => {
    e.preventDefault()
    console.log("hello")
  }

  return (
    <section className="flex flex-1 items-center">
      <div className="border-subtle border-2 p-4">
        <h2>Hi, Welcome back!</h2>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text"  className="bg-active"/>
          <input type="text"  className="bg-active"/>

          <button className="bg-active">Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login
