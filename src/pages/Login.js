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

  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    dispatch(handleLogin(payload))
  }

  //   useEffect(() => {
  //     const checkUser = () => {
  //       const token = localStorage.getItem("token")
  //       if (!token) {
  //         setIsLoggedIn(true)
  //       } else {
  //         setIsLoggedIn(false)
  //       }
  //     }
  //     checkUser()
  //   }, [])

  //   swal({
  //     title: "Welcome!",
  //     text: "Logged in successfully",
  //     icon: "success",
  //     timer: 1500,
  //   })

  const props = {
    email,
    password,
    handleEmail,
    handlePassword,
    handleSubmit,
    isLoggedIn,
  }

  return (
    <div>
      <SignIn {...props} />
    </div>
  )
}

export default Login
