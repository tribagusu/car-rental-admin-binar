import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Navigate, useLocation } from "react-router-dom"

// components
import Login from "../components/Login"
import { handleLogin } from "../redux/actions/authAction"

const LoginPage = () => {
  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // const from = location.state?.from?.pathname || "/"
  const user = localStorage.getItem("token")

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    dispatch(handleLogin(payload, setErrMsg, navigate))
  }

  const props = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    errMsg,
  }

  return (
    <div>
      {!user ? <Login {...props} /> : <Navigate to="/dashboard" replace />}
    </div>
  )
}

export default LoginPage
