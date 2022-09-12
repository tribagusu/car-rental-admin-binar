import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"

// components
import SignIn from "../components/SignIn"
import { handleLogin } from "../redux/actions/authAction"

const Login = () => {
  // state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [errMsg, setErrMsg] = useState(false)

  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    dispatch(handleLogin(payload, setErrMsg, setIsLoggedIn))
  }

  const props = {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    isLoggedIn,
    errMsg,
  }

  return (
    <div>
      <SignIn {...props} />
    </div>
  )
}

export default Login
