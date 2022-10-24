import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, Navigate } from "react-router-dom"
// func
import { handleLogin } from "../redux/actions/authAction"

// comp
const Login = React.lazy(() => import("../components/Login"))

const LoginPage = () => {
  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errMsg, setErrMsg] = useState(false)
  const [logging, setLogging] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = localStorage.getItem("token")

  const handleSubmit = (e) => {
    setLogging(true)
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
    setLogging,
    logging,
  }

  return (
    <div>
      {!user ? <Login {...props} /> : <Navigate to="/dashboard" replace />}
    </div>
  )
}

export default LoginPage
