import { useState } from "react"
import axios from "axios"

// components
import SignIn from "../components/SignIn"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    axios
      .post("https://bootcamp-rent-car.herokuapp.com/admin/auth/login", payload)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => err.message)
  }

  const props = {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
  }

  return (
    <div>
      <SignIn {...props} />
    </div>
  )
}

export default Login
